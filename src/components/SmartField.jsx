import React, { useEffect, useRef, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

const defaultHeight = 36;

function SmartField({
  count = "UNDEFINED",
  title,
  description,
  id,
  list,
  setList,
}) {
  const [isSelected, setIsSelected] = useState(false);
  const textAreaRef = useRef();
  const divRef = useRef();
  const titleRef = useRef();

  const [textareaHeight, setTextareaHeight] = useState(defaultHeight);

  const titleChangeEvent = (e) => {
    const value = e.target.value;
    setList((current) => {
      return current.map((data, i) => {
        if (data.id === id) {
          return {
            ...data,
            title: value,
          };
        }
        return data;
      });
    });
  };

  const descriptionChangeEvent = (e) => {
    const field = e.target;
    const value = e.target.value;

    setList((current) => {
      return current.map((data, i) => {
        if (data.id === id) {
          return {
            ...data,
            description: value,
          };
        }
        return data;
      });
    });

    if (field.value === "") {
      setTextareaHeight(defaultHeight);
      return;
    }
    const scrollHeight = field.scrollHeight;
    setTextareaHeight(`${scrollHeight}px`);
  };

  useEffect(() => {
    if (titleRef.current && isSelected) {
      titleRef.current.focus();
    }
    if (!isSelected && !title && description) {
      setList((current) => {
        let tempTitle;

        if (description.length >= 10) {
          tempTitle = description.substring(0, 10) + "...";
        } else {
          tempTitle = description + "...";
        }

        return current.map((data, i) => {
          if (data.id === id) {
            return {
              ...data,
              title: tempTitle,
            };
          }
          return data;
        });
      });
    }

    const clickOutsideEvent = (e) => {
      if (divRef.current && !divRef.current.contains(e.target) && isSelected) {
        setIsSelected(false);
      }
    };
    document.addEventListener("mousedown", clickOutsideEvent);
    return () => document.removeEventListener("mousedown", clickOutsideEvent);
  }, [isSelected]);

  return (
    <div
      title={`ITEM ${count}`}
      ref={divRef}
      data-select={isSelected}
      onClick={() => setIsSelected(true)}
      className='group data-[select=true]:border-darkest w-full h-fit cursor-pointer gap-x-1 justify-center flex-col p-2 rounded-md bg-white flex hover:bg-slate-100 border-2 border-slate-400'
    >
      <div className='w-full p-1 flex items-center gap-x-1'>
        <input
          value={title}
          onChange={titleChangeEvent}
          ref={titleRef}
          data-select={isSelected}
          className='font-roboto-bold w-[calc(100%-1.5rem)] pointer-events-none h-10 data-[select=false]:cursor-pointer border-2 whitespace-pre-wrap py-1 px-2 border-transparent data-[select=false]:group-hover:bg-slate-100 data-[select=true]:pointer-events-auto data-[select=true]:border-slate-300 rounded-sm'
          type='text'
          placeholder='Enter title here.'
        />
        <BsFillTrashFill
          onClick={() => {
            setList((current) => {
              return current.filter((item) => item.id !== id);
            });
          }}
          title={`DELETE ITEM ${count}`}
          className='w-10 text-dark h-10 p-2 hover:bg-slate-400 rounded-md duration-200'
        />
      </div>
      <div
        data-select={isSelected}
        className='w-full grid px-1 data-[select=false]:grid-rows-[0] data-[select=true]:grid-rows-1 overflow-hidden data-[select=true]:py-1'
      >
        <textarea
          value={description}
          ref={textAreaRef}
          rows='1'
          onChange={descriptionChangeEvent}
          data-select={isSelected}
          style={{ height: textareaHeight }}
          className='font-roboto-regular w-full rounded-sm py-1 pb-2 px-2 border-slate-300 resize-none flex overflow-y-hidden data-[select=true]:border-2'
          placeholder='Enter description here.'
        />
      </div>
    </div>
  );
}

export default SmartField;
