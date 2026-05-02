import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Plus,
  Trash2,
  Import,
  Copy,
  Pencil,
  Clock,
  EllipsisVertical,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MethodBadge } from "./MethodBadge";
import { useRequestStore } from "@/store/use-request-store";
import { cn } from "@/lib/utils";
import { useCollection } from "@/hooks/useCollection";
import { useQueryClient } from "@tanstack/react-query";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";
import { Input } from "../ui/input";

const timeAgo = (ts: number) => {
  const diff = Date.now() - ts;
  if (diff < 60000) return "just now";
  if (diff < 3600000) return `${Math.floor(diff / 60000)} min ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  return `${Math.floor(diff / 86400000)}d ago`;
};

export const AppSidebar = () => {
  const client = useQueryClient();
  const [reqIdToRename, setReqIdToRename] = useState<number | null>(null);
  const [newName, setNewName] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const { sidebarOpen, sidebarTab, setSidebarTab, loadRequest, clearHistory } =
    useRequestStore();

  const [newCollName, setNewCollName] = useState("");
  const [showNewColl, setShowNewColl] = useState(false);

  if (!sidebarOpen) return null;

  const {
    createCollection,
    deleteRequestMutation,
    getAllCollections,
    deleteCollectionMutation,
    renameRequestMutation,
    getHistories,
    deleteHistoryMutation,
  } = useCollection();

  const { tabs, setActiveTab } = useRequestStore();

  const handleDeleteRequest = (collId: number, reqId: number) => {
    deleteRequestMutation.mutate({ collId: collId, reqId: reqId });
  };

  const toggle = (id: number) => {
    client.setQueryData(["collections"], (oldData: any) => {
      if (!oldData) return oldData;

      return oldData.map((c: any) =>
        c.id === id ? { ...c, isExpanded: !c.isExpanded } : c,
      );
    });
  };

  const deleteCol = (id: number) => {
    deleteCollectionMutation.mutate(id);
  };

  const rename = (reqId: number) => {
    renameRequestMutation.mutate({ id: reqId, name: newName });
  };

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: 260, opacity: 1 }}
      exit={{ width: 0, opacity: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.3 }}
      className="flex-shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col h-full overflow-hidden"
    >
      {/* Tabs */}
      <div className="flex border-b border-sidebar-border">
        {(["collections", "history"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setSidebarTab(t)}
            className={cn(
              "flex-1 py-2.5 text-xs uppercase tracking-wider transition-colors",
              t === sidebarTab
                ? "text-sidebar-foreground border-b-2 border-sidebar-primary"
                : "text-muted-foreground",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col">
        {/* DISPLAYING COLLECTIONS */}
        {sidebarTab === "collections" && (
          <div className="p-2 space-y-1 flex-1">
            <div className="flex items-center gap-1 mb-3 mt-2">
              {showNewColl ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newCollName) {
                      createCollection.mutate(newCollName);
                      setNewCollName("");
                      setShowNewColl(false);
                    }
                  }}
                  className="flex gap-1 flex-1"
                >
                  <input
                    autoFocus
                    value={newCollName}
                    onChange={(e) => setNewCollName(e.target.value)}
                    onBlur={() => setShowNewColl(false)}
                    placeholder="Collection name"
                    className="flex-1 bg-sidebar-accent px-2 py-1 rounded text-xs outline-none"
                  />
                </form>
              ) : (
                <>
                  <button
                    className="w-fit bg-sidebar-accent px-2  py-1 rounded text-xs outline-none flex items-center text-white  hover:text-foreground transition-colors"
                    onClick={() => setShowNewColl(true)}
                  >
                    <Plus className="h-4 w-4 " />
                  </button>
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Collections"
                    className="flex-1 bg-sidebar-accent px-2 py-1 rounded text-xs outline-none"
                  />
                </>
              )}
            </div>

            {createCollection.isPending && <Skeleton className="w-full h-6" />}

            {getAllCollections.isPending ? (
              <>
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-full h-6" />
              </>
            ) : (
              getAllCollections.data
                ?.filter((coll) =>
                  coll.name.toLowerCase().includes(search.toLowerCase()),
                )
                .map((coll) => (
                  <div key={coll.id}>
                    <button
                      onClick={() => toggle(coll.id as number)}
                      className="group flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs hover:bg-sidebar-accent transition-colors"
                    >
                      <ChevronRight
                        className={cn(
                          "h-3 w-3 transition-transform text-muted-foreground",
                          coll.isExpanded && "rotate-90",
                        )}
                      />
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: coll.color }}
                      />
                      <span className="flex-1 text-left truncate">
                        {coll.name}
                      </span>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <span className="opacity-0 group-hover:opacity-100 hover:!opacity-100 text-rose-500">
                            <Trash2 className="h-3 w-3" />
                          </span>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete {coll.name} collection and all
                              its requests.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => deleteCol(coll.id)}
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </button>
                    {coll.isExpanded && (
                      <div className="ml-4 space-y-0.5">
                        {coll.requests.map((req) => (
                          <div
                            key={req.id}
                            onClick={() => {
                              if (reqIdToRename) return;
                              if (tabs.some((t) => t.id === req.id)) {
                                setActiveTab(req.id);
                                return;
                              }
                              loadRequest(req);
                            }}
                            className={`group flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs cursor-pointer  ${reqIdToRename !== req.id && "hover:bg-sidebar-accent"} transition-colors`}
                          >
                            <MethodBadge method={req.method} />
                            {reqIdToRename === req.id ? (
                              <form
                                onSubmit={(
                                  e: React.FormEvent<HTMLFormElement>,
                                ) => {
                                  e.preventDefault();
                                  setReqIdToRename(null);
                                  rename(req.id);
                                }}
                              >
                                <input
                                  type="text"
                                  defaultValue={req.name}
                                  onChange={(e) => setNewName(e.target.value)}
                                  autoFocus
                                  onBlur={() => setReqIdToRename(null)}
                                  className="flex-1 bg-sidebar-accent px-2 py-1 rounded text-xs outline-none w-3/4"
                                />
                              </form>
                            ) : renameRequestMutation.isPending ? (
                              <Skeleton className="w-16 h-4" />
                            ) : (
                              <span className="flex-1 text-left truncate text-sidebar-foreground/80">
                                {req.name}
                              </span>
                            )}

                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="opacity-0 group-hover:opacity-100 outline-none border-none">
                                  <EllipsisVertical className="h-3 w-3" />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuGroup>
                                  <DropdownMenuItem
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setReqIdToRename(req.id);
                                    }}
                                    className="flex items-center gap-2"
                                  >
                                    Rename
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteRequest(
                                        coll.id as number,
                                        +req.id,
                                      );
                                    }}
                                    className="flex items-center gap-2  text-destructive hover:bg-destructive/30"
                                  >
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuGroup>
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <div className="flex gap-0.5 opacity-0 group-hover:opacity-100">
                              {/* <Copy className="h-2.5 w-2.5 text-muted-foreground hover:text-foreground" /> */}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
            )}

            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-xs text-muted-foreground mt-2"
            >
              <Import className="h-3 w-3 mr-1" /> Import
            </Button>
          </div>
        )}
        {sidebarTab === "collections" && (
          <div className="mt-auto p-4">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 p-4 text-center shadow-md">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Current Plan
              </p>
              <p className="mt-1 font-bold text-primary">✨ Free Trial</p>
            </div>
          </div>
        )}

        {/* DISPLAYING HISTORY */}
        {sidebarTab === "history" && (
          <div className="p-2 space-y-0.5">
            {deleteHistoryMutation.isPending ? (
              <Skeleton className="w-full h-6" />
            ) : getHistories?.data?.length > 0 &&  (
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-xs text-muted-foreground mb-2"
                onClick={() => deleteHistoryMutation.mutate()}
              >
                <Trash2 className="h-3 w-3 mr-1" /> Clear History
              </Button>
            )}

            {getHistories.data
              ?.sort(
                (a, b) =>
                  new Date(b.time).getTime() - new Date(a.time).getTime(),
              )
              ?.map((item) => (
                <button
                  key={item.id}
                  onClick={() => loadRequest(item)}
                  className="flex items-center gap-2 w-full px-2 py-2 rounded text-xs hover:bg-sidebar-accent transition-colors"
                >
                  <MethodBadge method={item.method?.toUpperCase()} />
                  <span className="flex-1 text-left truncate font-mono text-[11px] text-sidebar-foreground/80">
                    {item.url.replace(/^https?:\/\//, "").slice(0, 30)}
                  </span>
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock className="h-2.5 w-2.5" />
                    {timeAgo(new Date(item.time).getTime())}
                  </span>
                </button>
              ))}
            {getHistories.data?.length === 0 && (
              <p className="text-xs text-muted-foreground text-center py-8">
                No history yet
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};
