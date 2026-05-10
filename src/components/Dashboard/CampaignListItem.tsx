import type { Campaign } from "@/api/adsClient.api";
import GoogleLogo from "../GoogleLogo";
import { Badge } from "../ui/badge";
import { IconPointer } from "@tabler/icons-react";

const CampaignListItem = (campaign: Campaign) => {
  return (
    <div className="w-full h-fit py-3 px-4 flex items-center border-b">
      {/* Left - name */}
      <div className="flex items-center gap-2 flex-1 min-w-0">
        <GoogleLogo />
        <div className="flex flex-col gap-0.5">
          <p className="text-sm line-clamp-1">{campaign.name}</p>
          <p className="text-xs text-muted-foreground">{campaign.id}</p>
        </div>
      </div>

      {/* Center - badge */}
      <div className="flex-1 md:flex justify-center hidden">
        {campaign.status === "ENABLED" ? (
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            Enabled
          </Badge>
        ) : campaign.status === "PAUSED" ? (
          <Badge className="bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300">
            Paused
          </Badge>
        ) : (
          <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
            Removed
          </Badge>
        )}
      </div>

      {/* Right - clicks */}
      <div className="flex-1 flex justify-end">
        <div className="border rounded-md flex select-none items-center gap-2 px-3 py-2">
          <div className="h-3 w-3 bg-green-950 rounded-full flex items-center justify-center">
            <div className="h-1.5 w-1.5 bg-green-600 rounded-full"></div>
          </div>
          <span className="text-xs md:text-sm whitespace-nowrap">
            {campaign.clicks} clicks
          </span>
          <IconPointer className="size-4" />
        </div>
      </div>
    </div>
  );
};

export default CampaignListItem;
