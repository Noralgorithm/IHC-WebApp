import React, { useEffect, useState } from "react";
import MarketPlayerList from "./MarketPlayerList";
import Filters from "../../fantasy/bench/Filters";
import * as benchServices from "../../../services/squad.services";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlayer,
  storeBenchInfo,
  storeTeamList,
  resetFilters,
} from "../../../features/fantasy/fantasySlice";
import * as teamServices from "../../../services/team.services";

function MarketBench({ setMarketBench }) {
  const eventId = 1;
  const token = useSelector((state) => state.user.token);
  const [isLoading, setIsLoading] = useState(true);
  const fantasyState = useSelector((state) => state.fantasy);

  const dispatch = useDispatch();

  const handleSelectPlayer = (id, position) => {
    dispatch(selectPlayer({ id, position }));
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await benchServices.fetchBench(
          token,
          eventId,
          fantasyState.bench.teamFilter,
          fantasyState.bench.positionFilter,
          fantasyState.bench.playerNameSearch,
          fantasyState.bench.paginate.page
        );
        const teamList = await teamServices.fetchTeamsList(token, eventId);
        dispatch(storeTeamList(teamList));
        dispatch(storeBenchInfo(data));
        setIsLoading(false);
      } catch (e) {
        alert(e.message);
      }
    })();
  }, [
    token,
    eventId,
    dispatch,
    fantasyState.bench.teamFilter,
    fantasyState.bench.positionFilter,
    fantasyState.bench.playerNameSearch,
    fantasyState.bench.paginate.page,
    fantasyState.insertedPlayer,
    fantasyState.removedPlayer,
  ]);

  if (isLoading)
    return (
      <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-25 z-30">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-80 z-30 flex justify-center items-center">
      <div className="md:w-5/12 w-11/12 md:h-[90%] h-1/2 bg-[#647B80] rounded-t">
        <header className="w-full bg-[#EAEAEA] h-[20%] flex flex-col justify-center rounded-t drop-shadow-2xl">
          <div className="w-full flex justify-between">
            <h1 className="w-1/5 text-center text-offside-titles text-xl font-semibold">
              Almacén
            </h1>
            <button
              className="text-xl w-1/12 font-semibold opacity-60    "
              onClick={() => {
                setMarketBench(false);
              }}
            >
              X
            </button>
          </div>

          <Filters dispatch={dispatch} />
        </header>
        <MarketPlayerList handleSelectPlayer={handleSelectPlayer} />
      </div>
    </div>
  );
}

export default MarketBench;
