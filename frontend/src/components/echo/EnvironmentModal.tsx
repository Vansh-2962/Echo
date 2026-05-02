import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { useRequestStore, type EnvVariable } from '@/store/use-request-store';
import { cn } from '@/lib/utils';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const uid = () => Math.random().toString(36).slice(2, 10);

export const EnvironmentModal = ({ open, onOpenChange }: Props) => {
  const { environments, addEnvironment, updateEnvironment, deleteEnvironment, activeEnvironmentId, setActiveEnvironment } = useRequestStore();
  const [selectedEnvId, setSelectedEnvId] = useState<string | null>(environments[0]?.id || null);

  const selectedEnv = environments.find(e => e.id === selectedEnvId);

  const addVariable = () => {
    if (!selectedEnv) return;
    updateEnvironment(selectedEnv.id, [...selectedEnv.variables, { id: uid(), key: '', initialValue: '', currentValue: '', isSecret: false }]);
  };

  const updateVariable = (varId: string, updates: Partial<EnvVariable>) => {
    if (!selectedEnv) return;
    updateEnvironment(selectedEnv.id, selectedEnv.variables.map(v => v.id === varId ? { ...v, ...updates } : v));
  };

  const removeVariable = (varId: string) => {
    if (!selectedEnv) return;
    updateEnvironment(selectedEnv.id, selectedEnv.variables.filter(v => v.id !== varId));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border sm:max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-sm font-semibold">Environments</DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 overflow-hidden gap-4 min-h-0">
          {/* Env list */}
          <div className="w-48 flex-shrink-0 space-y-1 overflow-y-auto">
            {environments.map(env => (
              <button
                key={env.id}
                onClick={() => setSelectedEnvId(env.id)}
                className={cn(
                  'group w-full flex items-center justify-between px-3 py-2 rounded text-xs transition-colors',
                  env.id === selectedEnvId ? 'bg-muted text-foreground' : 'text-muted-foreground hover:bg-muted/50'
                )}
              >
                <div className="flex items-center gap-2">
                  {env.id === activeEnvironmentId && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  <span>{env.name}</span>
                </div>
                <Trash2
                  className="h-3 w-3 opacity-0 group-hover:opacity-50 hover:!opacity-100 text-destructive"
                  onClick={e => { e.stopPropagation(); deleteEnvironment(env.id); }}
                />
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs text-muted-foreground justify-start"
              onClick={() => addEnvironment('New Environment')}
            >
              <Plus className="h-3 w-3 mr-1" /> Add Environment
            </Button>
          </div>

          {/* Variables */}
          {selectedEnv && (
            <div className="flex-1 overflow-y-auto space-y-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xs font-medium">{selectedEnv.name}</h3>
                <Button
                  variant={activeEnvironmentId === selectedEnv.id ? 'default' : 'outline'}
                  size="sm"
                  className="text-[10px] h-6"
                  onClick={() => setActiveEnvironment(activeEnvironmentId === selectedEnv.id ? null : selectedEnv.id)}
                >
                  {activeEnvironmentId === selectedEnv.id ? 'Active' : 'Set Active'}
                </Button>
              </div>

              <div className="grid grid-cols-[1fr_1fr_1fr_28px_28px] gap-0 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border pb-1">
                <span className="px-2">variable</span>
                <span className="px-2">initial value</span>
                <span className="px-2">current value</span>
                <span />
                <span />
              </div>

              {selectedEnv.variables.map(v => (
                <div key={v.id} className="grid grid-cols-[1fr_1fr_1fr_28px_28px] gap-0 group items-center">
                  <Input
                    value={v.key}
                    onChange={e => updateVariable(v.id, { key: e.target.value })}
                    className="h-7 text-xs font-mono bg-surface border-border rounded-none"
                    placeholder="KEY"
                  />
                  <Input
                    value={v.initialValue}
                    onChange={e => updateVariable(v.id, { initialValue: e.target.value })}
                    className="h-7 text-xs font-mono bg-surface border-border rounded-none"
                  />
                  <Input
                    type={v.isSecret ? 'password' : 'text'}
                    value={v.currentValue}
                    onChange={e => updateVariable(v.id, { currentValue: e.target.value })}
                    className="h-7 text-xs font-mono bg-surface border-border rounded-none"
                  />
                  <button onClick={() => updateVariable(v.id, { isSecret: !v.isSecret })} className="flex items-center justify-center text-muted-foreground hover:text-foreground">
                    {v.isSecret ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                  </button>
                  <button onClick={() => removeVariable(v.id)} className="flex items-center justify-center opacity-0 group-hover:opacity-100 text-destructive">
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ))}

              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground" onClick={addVariable}>
                <Plus className="h-3 w-3 mr-1" /> Add Variable
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
