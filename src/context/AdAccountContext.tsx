import {
  fetchConnectedGoogleAdAccounts,
  type SavedAdAccount,
} from "@/api/adsClient.api";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const STORAGE_KEY = "selectedAdAccountId";

type AdAccountContextType = {
  adAccounts: SavedAdAccount[];
  selectedAdAccount: SavedAdAccount | null;
  setSelectedAdAccount: (acc: SavedAdAccount) => void;
  refreshAdAccounts: () => Promise<void>;
  loading: boolean;
};

const AdAccountContext = createContext<AdAccountContextType | null>(null);

const AdAccountProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [adAccounts, setAdAccounts] = useState<SavedAdAccount[]>([]);
  const [selectedAdAccount, setSelectedAdAccountState] =
    useState<SavedAdAccount | null>(null);
  const [loading, setLoading] = useState(true);

  const setSelectedAdAccount = (acc: SavedAdAccount) => {
    localStorage.setItem(STORAGE_KEY, String(acc.id));
    setSelectedAdAccountState(acc);
  };

  const refreshAdAccounts = async () => {
    try {
      const res = await fetchConnectedGoogleAdAccounts();

      if (res.success && res.data) {
        setAdAccounts(res.data);
        setLoading(false);
        return;
      } else {
        setAdAccounts([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      setAdAccounts([]);
      setSelectedAdAccountState(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    refreshAdAccounts();
  }, [user]);

  useEffect(() => {
    if (adAccounts.length === 0) return;

    const savedId = localStorage.getItem(STORAGE_KEY);
    const savedAccount = savedId
      ? adAccounts.find((acc) => acc.id === Number(savedId))
      : null;

    setSelectedAdAccountState(savedAccount ?? adAccounts[0]);
  }, [adAccounts, selectedAdAccount]);

  return (
    <AdAccountContext.Provider
      value={{
        adAccounts,
        loading,
        refreshAdAccounts,
        selectedAdAccount,
        setSelectedAdAccount,
      }}
    >
      {children}
    </AdAccountContext.Provider>
  );
};

export const useAdAccount = () => {
  const ctx = useContext(AdAccountContext);
  if (!ctx) {
    throw new Error("useAdaccount must be used inside AdAccountProvidor");
  }
  return ctx;
};

export default AdAccountProvider;
