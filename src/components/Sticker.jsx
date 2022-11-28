import React from "react";
import bandera from "../Images/Bandera-circular-de-Espana.png";
import medioCentro from "../Images/medioCentro.png";
import defensa from "../Images/defensa.png";
import portero from "../Images/portero.png";
import delantero from "../Images/delantero.png";

function Sticker({ stickerInfo }) {

  const positionImage = () => {
    switch (stickerInfo.position) {
      case "MedioCentro":
        return medioCentro;
      case "Defensa":
        return defensa;
      case "Delantero":
        return delantero;
      case "Portero":
        return portero;
      default:
        return medioCentro;
    }
  };

  //console.log(stickerInfo.img);

  return (
    <div className="h-full w-full flex justify-center items-center bg-fondo-barajita bg-cover bg-center bg-no-repeat">
      <div
        style={{
          backgroundImage: "url(" + stickerInfo.img + ")",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          backgroundSize: "90%",
          backgroundPosition: "bottom",
        }}
      >

        <div className="bg-marco-barajita bg-cover w-full h-full bg-no-repeat bg-center">
          <div className="w-full h-1/2 flex justify-center">
            <div className="w-full h-full gap-y-[4%] grid grid-cols-1 content-center">
              <h1 className="ml-[19%] text-xs font-bold w-full">
                {stickerInfo.height}
              </h1>
              <h1 className="ml-[21%] text-xs font-bold w-full">
                {stickerInfo.weight}
              </h1>
            </div>
            <div className="grid grid-cols-1 w-1/2 h-full justify-items-center gap-0">
              <img
                src={bandera}
                alt=""
                className="justify-self-end w-auto h-2/5 mt-[28%]"
              />
              <img
                src={positionImage()}
                alt=""
                className="h-1/2 w-auto ml-[18%]"
              />
            </div>
          </div>
          <h1 className="flex h-1/2 items-end pb-[3%] justify-center w-full text-2xl font-semibold text-sticker-name">
            {stickerInfo.playerName}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Sticker;
