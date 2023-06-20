import {useState} from "react";


export function InputField(props) {
    return (
        <>
            <label htmlFor="helper-text"
                   className="text-base text-gray-900 dark:text-white font-bold">{props.label}</label>
            <input id="helper-text" autoComplete="off" type="text"
                   className="p-2.5 mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   placeholder={props.placeholder}/>
        </>
    )
}

export function InputArea(props) {
    return(
        <>
            <label htmlFor="message"
                   className="text-base text-gray-900 dark:text-white font-bold">{props.label}</label>
            <textarea id="message" rows={props.rows === null ? 4 : props.rows}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder={props.placeholder}></textarea>
        </>
    )
}

export function InputStepper(props) {


  return (
    <div className="justify-items-stretch">
      <label htmlFor="steps-range" className="text-base text-gray-900 dark:text-white font-bold">
        {props.label === null ? "Default" : props.label}
      </label>
      <input id="steps-range" type="range" min="0" max="10" defaultValue={props.min} step={props.step} list="rating"
             aria-valuemin={props.min} aria-valuemax={props.max} onChange={(e) => props.changeValue( Number( e.target.value ) )}
             className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700" />
    </div>
  )
}