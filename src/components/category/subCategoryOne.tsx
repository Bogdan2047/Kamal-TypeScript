import React, { useRef, useState } from "react";
import { SubCategoryTwo } from "./subCategoryTwo";
import Lines from "./lines";
import HorizontalLine from "./horizontalLine";
import "./styles/subCategoryOne.css";

interface SubCategoryOneProps {
  handleDeleteSubOneCategory: (index: number) => void;
  handleEditSubOneCategory: (newNameOne: string, index: number) => void;
  handleAddSubOneCategory: (id: number) => void;
  handleDeleteSubTwoCategory: (index: number, indexSubOne: number) => void;
  handleEditSubTwoCategory: (
    newNameTwo: string,
    index: number,
    indexSubOne: number
  ) => void;
  handleAddSubTwoCategory: (id: number, indexSubOne: number) => void;
  handleDeleteSubTreeCategory: (
    index: number,
    indexSubOne: number,
    indexSubTwo: number
  ) => void;
  handleEditSubTreeCategory: (
    newNameTree: string,
    indexSubTwo: number,
    index: number,
    indexSubOne: number
  ) => void;
  index: number;
  item: any;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
}

export const SubCategoryOne: React.FC<SubCategoryOneProps> = ({
  handleDeleteSubOneCategory,
  handleEditSubOneCategory,
  handleAddSubOneCategory,
  handleDeleteSubTwoCategory,
  handleEditSubTwoCategory,
  handleAddSubTwoCategory,
  handleDeleteSubTreeCategory,
  handleEditSubTreeCategory,
  index,
  item,
  x,
  y,
  offsetX,
  offsetY,
}) => {
  const [newNameOne, setNewNameOne] = useState<string>("");
  const [showButtonOne, setShowButtonOne] = useState<boolean>(true);
  const [changeStyleForOne, setChangeStyleForOne] = useState<number | any>(
    null
  );

  const inputRefOne = useRef<HTMLInputElement | null>(null);

  const handleClickOne = () => {
    if (inputRefOne.current) {
      inputRefOne.current.focus();
      setShowButtonOne(false);
    }
  };

  const handleChangedCategoryNameOne = () => {
    handleEditSubOneCategory(newNameOne, index);
    setShowButtonOne(true);
    setChangeStyleForOne(index);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        className={
          index === changeStyleForOne
            ? "styleForSubCategoryOne"
            : "styleForSubCategory"
        }
        placeholder={item.name}
        ref={inputRefOne}
        onChange={(e) => setNewNameOne(e.target.value)}
        value={newNameOne ? newNameOne : item.name}
      />
      {showButtonOne ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 5,
            width: 205,
          }}
        >
          <button
            onClick={() => handleDeleteSubOneCategory(index)}
            style={{
              backgroundColor: "red",
              color: "white",
              borderStyle: "none",
            }}
          >
            del
          </button>
          <button
            onClick={handleClickOne}
            style={{
              backgroundColor: "grey",
              color: "white",
              borderStyle: "none",
            }}
          >
            change
          </button>
          <button
            onClick={() => handleAddSubOneCategory(index)}
            style={{
              backgroundColor: "green",
              color: "white",
              borderStyle: "none",
            }}
          >
            +
          </button>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: 5,
              width: 205,
            }}
          >
            <button
              onClick={handleChangedCategoryNameOne}
              style={{
                backgroundColor: "green",
                color: "white",
                borderStyle: "none",
              }}
            >
              yes
            </button>
            <button
              onClick={() => setShowButtonOne(true)}
              style={{
                backgroundColor: "red",
                color: "white",
                borderStyle: "none",
              }}
            >
              no
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 10,
        }}
      >
        {item.subCategoryOne
          ? item.subCategoryOne.map((el: any, indexSubOne: number) => (
              <div className="spaceBLockOne" key={indexSubOne}>
                <HorizontalLine x1={"100%"} y1={0} y={5} />
                <Lines x1={x} y1={y} x2={x + offsetX} y2={y + offsetY} />

                <SubCategoryTwo
                  el={el}
                  indexSubOne={indexSubOne}
                  index={index}
                  handleDeleteSubTwoCategory={handleDeleteSubTwoCategory}
                  handleEditSubTwoCategory={handleEditSubTwoCategory}
                  handleAddSubTwoCategory={handleAddSubTwoCategory}
                  handleDeleteSubTreeCategory={handleDeleteSubTreeCategory}
                  handleEditSubTreeCategory={handleEditSubTreeCategory}
                  x={100}
                  y={0}
                  offsetX={0}
                  offsetY={50}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
