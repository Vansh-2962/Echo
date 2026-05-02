import { Trash2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import type { KeyValuePair } from '@/store/use-request-store';

interface Props {
  pairs: KeyValuePair[];
  onChange: (pairs: KeyValuePair[]) => void;
  showDescription?: boolean;
}

const uid = () => Math.random().toString(36).slice(2, 10);

export const KeyValueTable = ({ pairs, onChange, showDescription = true }: Props) => {
  const update = (id: string, field: keyof KeyValuePair, value: string | boolean) => {
    const updated = pairs.map(p => p.id === id ? { ...p, [field]: value } : p);
    // Auto-add row if last row is being typed in
    const last = updated[updated.length - 1];
    if (last && (last.key || last.value)) {
      updated.push({ id: uid(), key: '', value: '', description: '', enabled: true });
    }
    onChange(updated);
  };

  const remove = (id: string) => {
    const filtered = pairs.filter(p => p.id !== id);
    if (filtered.length === 0) filtered.push({ id: uid(), key: '', value: '', description: '', enabled: true });
    onChange(filtered);
  };

  return (
    <div className="text-sm">
      <div className="grid gap-0" style={{ gridTemplateColumns: showDescription ? '32px 1fr 1fr 1fr 32px' : '32px 1fr 1fr 32px' }}>
        <div className="p-2 text-[10px] uppercase tracking-wider text-muted-foreground" />
        <div className="p-2 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border/50">key</div>
        <div className="p-2 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border/50">value</div>
        {showDescription && <div className="p-2 text-[10px] uppercase tracking-wider text-muted-foreground border-b border-border/50">description</div>}
        <div />
        {pairs.map(pair => (
          <div key={pair.id} className="contents group">
            <div className="flex items-center justify-center border-b border-border/30 py-1">
              <Checkbox
                checked={pair.enabled}
                onCheckedChange={(v) => update(pair.id, 'enabled', !!v)}
                className="h-3.5 w-3.5"
              />
            </div>
            <div className="border-b border-border/30">
              <input
                value={pair.key}
                onChange={e => update(pair.id, 'key', e.target.value)}
                placeholder="key"
                className="w-full bg-transparent px-2 py-1.5 text-sm font-mono outline-none placeholder:text-muted-foreground/30"
              />
            </div>
            <div className="border-b border-border/30">
              <input
                value={pair.value}
                onChange={e => update(pair.id, 'value', e.target.value)}
                placeholder="value"
                className="w-full bg-transparent px-2 py-1.5 text-sm font-mono outline-none placeholder:text-muted-foreground/30"
              />
            </div>
            {showDescription && (
              <div className="border-b border-border/30">
                <input
                  value={pair.description || ''}
                  onChange={e => update(pair.id, 'description', e.target.value)}
                  placeholder="description"
                  className="w-full bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground/30"
                />
              </div>
            )}
            <div className="flex items-center justify-center border-b border-border/30">
              <button
                onClick={() => remove(pair.id)}
                className="opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity text-destructive"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
