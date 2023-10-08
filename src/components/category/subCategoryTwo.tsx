import React, { useRef, useState } from "react";
import "./styles/subCategoryTwo.css";
import Lines from "./lines";
import HorizontalLine from "./horizontalLine";
import SubCategoryTree from "./subCategoryTree";

interface SubCategoryTwoProps {
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
  indexSubOne: number;
  index: number;
  el: any;
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
}

export const SubCategoryTwo: React.FC<SubCategoryTwoProps> = ({
  handleDeleteSubTwoCategory,
  handleEditSubTwoCategory,
  handleAddSubTwoCategory,
  handleDeleteSubTreeCategory,
  handleEditSubTreeCategory,
  indexSubOne,
  index,
  el,
  x,
  y,
  offsetX,
  offsetY,
}) => {
  const [newNameTwo, setNewNameTwo] = useState<string>("");

  const [showButtonTwo, setShowButtonTwo] = useState<boolean>(true);
  const [changeStyleForTwo, setChangeStyleForTwo] = useState<number | null>(
    null
  );

  const inputRefTwo = useRef<HTMLInputElement | null>(null);

  const handleClickTwo = () => {
    if (inputRefTwo.current) {
      inputRefTwo.current.focus();
      setShowButtonTwo(false);
    }
  };

  const handleChangedCategoryNameTwo = () => {
    handleEditSubTwoCategory(newNameTwo, index, indexSubOne);
    setShowButtonTwo(true);
    setChangeStyleForTwo(indexSubOne);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input
        className={
          indexSubOne === changeStyleForTwo
            ? "styleForSubCategoryTwo"
            : "styleForSubCategory"
        }
        placeholder={el.name}
        ref={inputRefTwo}
        onChange={(e) => setNewNameTwo(e.target.value)}
        value={newNameTwo ? newNameTwo : el.name}
      />
      {showButtonTwo ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 5,
            width: 205,
          }}
        >
          <button
            onClick={() => handleDeleteSubTwoCategory(index, indexSubOne)}
            style={{
              backgroundColor: "red",
              color: "white",
              borderStyle: "none",
            }}
          >
            del
          </button>
          <button
            onClick={handleClickTwo}
            style={{
              backgroundColor: "grey",
              color: "white",
              borderStyle: "none",
            }}
          >
            change
          </button>
          <button
            onClick={() => handleAddSubTwoCategory(index, indexSubOne)}
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
              onClick={handleChangedCategoryNameTwo}
              style={{
                backgroundColor: "green",
                color: "white",
                borderStyle: "none",
              }}
            >
              yes
            </button>
            <button
              onClick={() => setShowButtonTwo(true)}
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
        {el.subCategoryTwo
          ? el.subCategoryTwo.map((subTwo: any, indexSubTwo: number) => (
              <div className="spaceBLockTwo" key={indexSubTwo}>
                <HorizontalLine x1={"100%"} y1={0} y={5} />
                <Lines x1={x} y1={y} x2={x + offsetX} y2={y + offsetY} />
                <SubCategoryTree
                  subTwo={subTwo}
                  key={indexSubTwo}
                  indexSubTwo={indexSubTwo}
                  indexSubOne={indexSubOne}
                  index={index}
                  handleDeleteSubTreeCategory={handleDeleteSubTreeCategory}
                  handleEditSubTreeCategory={handleEditSubTreeCategory}
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
