import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Props {
  authType: 'none' | 'bearer' | 'basic' | 'api-key';
  authConfig: Record<string, string>;
  onTypeChange: (type: 'none' | 'bearer' | 'basic' | 'api-key') => void;
  onConfigChange: (config: Record<string, string>) => void;
}

export const AuthPanel = ({ authType, authConfig, onTypeChange, onConfigChange }: Props) => {
  const updateConfig = (key: string, value: string) => {
    onConfigChange({ ...authConfig, [key]: value });
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <Label className="text-xs uppercase tracking-wider text-muted-foreground">auth type</Label>
        <Select value={authType} onValueChange={(v) => onTypeChange(v as typeof authType)}>
          <SelectTrigger className="w-48 bg-surface border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Auth</SelectItem>
            <SelectItem value="bearer">Bearer Token</SelectItem>
            <SelectItem value="basic">Basic Auth</SelectItem>
            <SelectItem value="api-key">API Key</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {authType === 'bearer' && (
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-wider text-muted-foreground">token</Label>
          <Input
            value={authConfig.token || ''}
            onChange={e => updateConfig('token', e.target.value)}
            placeholder="Enter bearer token"
            className="font-mono bg-surface border-border"
          />
        </div>
      )}

      {authType === 'basic' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">username</Label>
            <Input
              value={authConfig.username || ''}
              onChange={e => updateConfig('username', e.target.value)}
              className="bg-surface border-border"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">password</Label>
            <Input
              type="password"
              value={authConfig.password || ''}
              onChange={e => updateConfig('password', e.target.value)}
              className="bg-surface border-border"
            />
          </div>
        </div>
      )}

      {authType === 'api-key' && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">key name</Label>
              <Input
                value={authConfig.keyName || ''}
                onChange={e => updateConfig('keyName', e.target.value)}
                placeholder="X-API-Key"
                className="font-mono bg-surface border-border"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs uppercase tracking-wider text-muted-foreground">value</Label>
              <Input
                value={authConfig.keyValue || ''}
                onChange={e => updateConfig('keyValue', e.target.value)}
                className="font-mono bg-surface border-border"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground">add to</Label>
            <Select value={authConfig.addTo || 'header'} onValueChange={v => updateConfig('addTo', v)}>
              <SelectTrigger className="w-48 bg-surface border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="header">Header</SelectItem>
                <SelectItem value="query">Query Params</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {authType === 'none' && (
        <p className="text-sm text-muted-foreground">This request does not use any authorization.</p>
      )}
    </div>
  );
};
