import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import SmartField from "../components/SmartField";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaFilePdf } from "react-icons/fa";
import { MdOutlinePreview } from "react-icons/md";
import { BiReset } from "react-icons/bi";

const Button = ({ label, Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=' bg-green-500 hover:bg-green-600 border border-green-500 duration-75 active:bg-green-700 px-4 rounded-md shadow-md text-xs py-2 text-white font-bold flex items-center gap-x-1'
    >
      {label} <Icon className='h-4 w-4' />
    </button>
  );
};

function MainPage() {
  const [list, setList] = useState([]);

  const drapEndEvent = (result) => {
    if (!result.destination) return;
    if (result.type === "group") {
      setList((current) => {
        const newArray = current;
        const [removedItem] = newArray.splice(result.source.index, 1);
        newArray.splice(result.destination.index, 0, removedItem);
        return newArray;
      });
    }
  };

  const addListEvent = () => {
    setList((current) => {
      return [
        ...current,
        {
          id: crypto.randomUUID(),
          title: "",
          description: "",
        },
      ];
    });
  };

  return (
    <div className='w-full h-screen relative py-pad-3 flex justify-center bg-lightest'>
      {/* Background here */}
      <div className='md:w-[70%] relative lg:w-[50%] w-[95%] bg-white min-h-full rounded-xl shadow-md px-10 py-9 text-dark flex flex-col gap-y-2'>
        <div className='absolute bottom-6 w-full left-0 justify-center scroll-hidden gap-x-1 flex overflow-x-scroll'>
          <Button
            onClick={() => {
              window.print();
            }}
            label='DOWNLOAD PDF'
            Icon={FaFilePdf}
          />
          <Button label='PREVIEW' Icon={MdOutlinePreview} />
          <Button label='RESET' Icon={BiReset} />
        </div>
        <div className='font-roboto-regular h-10 flex items-center justify-between font-bold text-xl'>
          <h1>
            Reviewer Generator{" "}
            <span>{list.length !== 0 && `(${list.length})`}</span>
          </h1>
          <AiFillPlusCircle
            onClick={addListEvent}
            className='text-dark select-none w-6 h-6 cursor-pointer'
          />
        </div>
        <DragDropContext onDragEnd={drapEndEvent}>
          <Droppable type='group' droppableId='ROOT'>
            {(provided) => (
              <div
                className='h-[calc(100%-2.5rem)] pb-10 flex flex-col overflow-y-scroll pr-1 scroll'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {list.length === 0 && (
                  <div className='w-full flex items-center text-xl h-full justify-center font-roboto-condence'>
                    ~ Empty ~
                  </div>
                )}
                {list.map((data, i) => {
                  return (
                    <Draggable key={data.id} draggableId={data.id} index={i}>
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className='my-1'
                        >
                          <SmartField
                            title={data.title}
                            description={data.description}
                            count={i + 1}
                            id={data.id}
                            list={list}
                            setList={setList}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default MainPage;