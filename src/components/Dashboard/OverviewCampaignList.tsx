import { IconAdjustmentsAlt, IconSettings } from "@tabler/icons-react";
import { Button } from "../ui/button";
import CampaignListItem from "./CampaignListItem";
import { useAdAccount } from "@/context/AdAccountContext";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { getAllCampaignsOfGoogleCLientId, type Campaign } from "@/api/adsClient.api";
import CampaignListItemSkeleton from "../Skeletons/CampaignListItemSkeleton";
import EmptyCampaign from "../Empty/EmptyCampaign";

const OverviewCampaignList = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(false);

  const { selectedAdAccount } = useAdAccount();

  useEffect(() => {
    const fetchCampaigns = async () => {
      if (!selectedAdAccount) return;

      setLoading(true);
      try {
        const res = await getAllCampaignsOfGoogleCLientId(
          selectedAdAccount.adAccountId,
        );

        if (!res.success) {
          const message = res.error?.message ?? res.message;
          toast.error(message);
        }

        setCampaigns(res.data!);
      } catch {
        toast.error("An error occured. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCampaigns();
  }, [selectedAdAccount]);
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <div className="w-full py-2 flex gap-3 items-center">
        <Button variant={"ghost"} className="border border-border">
          <IconAdjustmentsAlt className="rotate-90" />
          Display
        </Button>
        <Button variant={"ghost"} className="border border-border">
          <IconSettings />
          Settings
        </Button>
      </div>

      <div className="w-full border min-h-80 rounded-xl flex flex-col">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <CampaignListItemSkeleton key={i} />
          ))
        ) : campaigns.length === 0 ? (
          <EmptyCampaign />
        ) : (
          campaigns.map((campaign) => (
            <CampaignListItem key={campaign.id} {...campaign} />
          ))
        )}
      </div>
    </div>
  );
};

export default OverviewCampaignList;
