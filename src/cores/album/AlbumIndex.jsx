import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTeam } from "../../features/album/albumSlice";
import Select from "react-select";

function AlbumIndex() {
  const teamsList = useSelector((state) => state.album.teamsList);
  const dispatch = useDispatch();
  const windowSize = window.innerWidth;
  const menuOpen = { ...(windowSize > 768 && { menuIsOpen: true }) };

  const handleChange = async (e) => {
    if (e.value !== "") {
      dispatch(filterTeam(e.value));
      e.value = "";
    }
  };
  const renderCustomItem = (item) => {
    return (
      <div className="w-full h-full flex gap-3">
        <img src={item.image} alt="" className="h-5 w-7 rounded-full" />{" "}
        <h1 className="text-black font-semibold">{item.label}</h1>
      </div>
    );
  };

  return (
    <div className={`w-full md:h-4/5 h-full bg-[#EFEFEF] rounded p-2`}>
      <Select
        value=""
        options={teamsList.map((team) => {
          return { value: team.id, label: team.name, image: team.badge };
        })}
        formatOptionLabel={renderCustomItem}
        className="z-0"
        onChange={handleChange}
        {...menuOpen}
        placeholder="Equipos"
        openMenu
        styles={{
          control: (baseStyles, props) => ({
            ...baseStyles,
            backgroundColor: "#7CABAC",
          }),
          placeholder: (baseStyles, props) => ({
            ...baseStyles,
            color: "white",
            fontWeight: 600,
          }),
          dropdownIndicator: (baseStyles, props) => ({
            ...baseStyles,

            display: windowSize < 768 ? "block" : "none",
          }),
          indicatorSeparator: (baseStyles, props) => ({
            ...baseStyles,
            display: windowSize < 768 ? "block" : "none",
          }),
        }}
      />
    </div>
  );
}

export default AlbumIndex;
