import Board from "react-trello";
import { createTranslate } from "react-trello";

const TEXTS = {
  "Add another lane": "Add Another List",
  "Click to add card": "Add a card",
  "Delete lane": "Delete lane",
  "Lane actions": "Lane actions",

  button: {
    "Add lane": "Add another list",
    "Add card": "ADD CARD",
    Cancel: "Cancel",
  },

  placeholder: {
    title: "title",
    description: "description",
    label: "label",
  },
};

const data = {
  lanes: [
    {
      id: "lane1",
      title: "To Do",
      cards: [],
    },

    {
      id: "lane2",
      title: "Doing",
      cards: [],
    },

    {
      id: "lane3",
      title: "Done",
      cards: [],
    },
  ],
};

function AppBoard() {
  return (
    <div className="App">
      <Board
        t={createTranslate(TEXTS)}
        editable
        draggable
        canAddLanes
        collapsibleLanes
        editLaneTitle
        data={data}
        style={{
          backgroundColor: "var(--color-main)",
          fontSize: "16px",
        }}
      />
    </div>
  );
}
export default AppBoard;
