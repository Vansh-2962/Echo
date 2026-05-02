import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRequestStore } from "@/store/use-request-store";
import { useCollection } from "@/hooks/useCollection";
import { toast } from "@/hooks/use-toast";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tabId: string;
}

export const SaveRequestModal = ({ open, onOpenChange, tabId }: Props) => {
  const { tabs } = useRequestStore();
  const tab = tabs.find((t) => t.id === tabId);

  const [name, setName] = useState("Untitled Request");
  const [collectionId, setCollectionId] = useState<number>(0);

  const { saveRequestInColllection, getAllCollections } = useCollection();

  useEffect(() => {
    if (getAllCollections.data) {
      setCollectionId(getAllCollections.data[0]?.id || 0);
    }
  });

  const handleSave = () => {
    saveRequestInColllection.mutate(
      {
        id: collectionId as number,
        request: tab,
        name: name || "Untitled Request",
      },
      {
        onSuccess: (data) => {
          if (data.success) {
            toast({
              title: "Success",
              description: "Request saved successfully",
            });
            onOpenChange(false);
          }
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">
            Save Request
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">
              request name
            </Label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-surface border-border font-mono"
            />
          </div>
          {
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                collection
              </Label>
              <Select value={collectionId} onValueChange={setCollectionId}>
                <SelectTrigger className="bg-surface border-border">
                  <SelectValue placeholder="Select collection" />
                </SelectTrigger>
                <SelectContent>
                  {getAllCollections.data?.map((c) => (
                    <SelectItem key={c.id} value={c.id}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          }
        </div>
        <DialogFooter>
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="text-xs"
          >
            Cancel
          </Button>
          <Button onClick={handleSave} className="text-xs">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
