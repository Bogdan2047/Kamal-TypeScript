import React, { useRef, useState } from "react";
import "./styles/subCategoryTree.css";

interface SubCategoryTreeProps {
  handleDeleteSubTreeCategory: (
    index: number,
    indexSubOne: number,
    indexSubTwo: number
  ) => void;
  handleEditSubTreeCategory: (
    newNameTree: string,
    index: number,
    indexSubOne: number,
    indexSubTwo: number
  ) => void;
  indexSubOne: number;
  index: number;
  indexSubTwo: number;
  subTwo: any;
}

const SubCategoryTree: React.FC<SubCategoryTreeProps> = ({
  handleDeleteSubTreeCategory,
  handleEditSubTreeCategory,
  indexSubOne,
  index,
  indexSubTwo,
  subTwo,
}) => {
  const [newNameTree, setNewNameTree] = useState<string>("");

  const [showButtonTree, setShowButtonTree] = useState<boolean>(true);
  const [changeStyleForTree, setChangeStyleForTree] = useState<number | null>(
    null
  );

  const inputRefTree = useRef<HTMLInputElement | null>(null);

  const handleClickTree = () => {
    if (inputRefTree.current) {
      inputRefTree.current.focus();
      setShowButtonTree(false);
    }
  };

  const handleChangedCategoryNameTree = () => {
    handleEditSubTreeCategory(newNameTree, index, indexSubOne, indexSubTwo);
    setShowButtonTree(true);
    setChangeStyleForTree(indexSubTwo);
  };

  return (
    <div>
      <input
        className={
          indexSubTwo === changeStyleForTree
            ? "styleForSubCategotyTree"
            : "styleForSubCategory"
        }
        placeholder={subTwo.name}
        ref={inputRefTree}
        onChange={(e) => setNewNameTree(e.target.value)}
        value={newNameTree ? newNameTree : subTwo.name}
      />
      {showButtonTree ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 5,
            width: 205,
          }}
        >
          <button
            onClick={() =>
              handleDeleteSubTreeCategory(index, indexSubOne, indexSubTwo)
            }
            style={{
              backgroundColor: "red",
              color: "white",
              borderStyle: "none",
            }}
          >
            del
          </button>
          <button
            onClick={handleClickTree}
            style={{
              backgroundColor: "grey",
              color: "white",
              borderStyle: "none",
            }}
          >
            change
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
              onClick={handleChangedCategoryNameTree}
              style={{
                backgroundColor: "green",
                color: "white",
                borderStyle: "none",
              }}
            >
              yes
            </button>
            <button
              onClick={() => setShowButtonTree(true)}
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
    </div>
  );
};

export default SubCategoryTree;
