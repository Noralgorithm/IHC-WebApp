import React from "react";
import MarketModal from "../MarketModal";
import { TbCurrencyDollar } from "react-icons/tb";

function MySalesModalCard({ setSalesModal, auctionInfo }) {
  console.log(auctionInfo)
  return (
    <MarketModal player={auctionInfo.market.sticker}>
      <div className="flex flex-col justify-evenly w-full h-full pt-5">
        <div className="w-full flex justify-evenly text-offside-titles">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Precio inicial</span>
            <h1 className="flex text-xl font-bold items-center gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="white"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              {auctionInfo.market.initialPurchaseValue}
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Precio de compra directa</span>
            <h1 className="flex text-xl font-bold items-center gap-1">
              <TbCurrencyDollar
                size="1.4rem"
                color="white"
                className="bg-gradient-offside rounded-full p-[1px]"
              />
              {auctionInfo.market.immediatePurchaseValue}
            </h1>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-offside-titles">
          <span className="font-semibold">Oferta ganadora actual</span>
          <h1 className="flex text-xl font-bold items-center gap-1">
            <TbCurrencyDollar
              size="1.4rem"
              color="white"
              className="bg-gradient-offside rounded-full p-[1px]"
            />
            {auctionInfo.highestBid.value}
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-gradient-offside rounded-full text-white font-semibold py-1 px-14"
            onClick={async () => {
              setSalesModal(false);
            }}
          >
            Volver
          </button>
        </div>
      </div>
    </MarketModal>
  );
}

export default MySalesModalCard;
