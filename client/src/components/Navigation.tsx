import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
export default function Navigation() {
  const { connected } = useWallet();
  useEffect(() => {
    console.log(connected ? "connected" : "disconnected");
  }, [connected]);
  return (
    <div className="w-screen h-[10vh] flex justify-between px-10 items-center py-10">
      <span className="text-xl font-bold">DeFlip</span>
      <WalletMultiButton />
    </div>
  );
}
