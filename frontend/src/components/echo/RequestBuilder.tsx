import { RequestTabs } from "./RequestTabs";
import { UrlBar } from "./UrlBar";
import { RequestConfigTabs } from "./RequestConfigTabs";
import { ResponsePanel } from "./ResponsePanel";

export const RequestBuilder = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <RequestTabs />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <UrlBar />
        <RequestConfigTabs />
        <ResponsePanel />
      </div>
    </div>
  );
};
