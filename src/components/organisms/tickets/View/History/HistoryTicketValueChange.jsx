import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import { isObject } from "lodash";

const ValueText = styled("span")`
	color: #2b2e72;
	font-family: Poppins;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 600;
`;

const ArrowIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
		<path
			d="M22.3145 13.6455C22.3145 13.373 22.2002 13.1094 21.998 12.916L16.2236 7.1416C15.9951 6.92188 15.7578 6.8252 15.5117 6.8252C14.9492 6.8252 14.5449 7.2207 14.5449 7.75684C14.5449 8.03809 14.6592 8.27539 14.835 8.45117L16.8125 10.4551L19.3613 12.7842L17.3223 12.6611H6.66992C6.08105 12.6611 5.67676 13.0654 5.67676 13.6455C5.67676 14.2168 6.08105 14.6211 6.66992 14.6211H17.3223L19.3613 14.498L16.8125 16.8271L14.835 18.8311C14.6592 19.0068 14.5449 19.2441 14.5449 19.5254C14.5449 20.0615 14.9492 20.457 15.5117 20.457C15.7578 20.457 15.9951 20.3604 16.2061 20.1582L21.998 14.3662C22.2002 14.1729 22.3145 13.9092 22.3145 13.6455Z"
			fill="#1C1C1E"
		/>
	</svg>
);

const HistoryTicketValueChange = ({ prevValue, newValue }) => {
	let modPrevValue = prevValue;
	let modNewValue = newValue;

	if (isObject(modPrevValue)) {
		let string = "";
		if(modPrevValue.some(item => Object.keys(item).includes("type"))) {
			modPrevValue.forEach((item, ind) => {
				const en = Object.entries(item);
				const res = en.forEach((e, i, arr) => (string = string += `${e[0]}(${ind+1}): ${e[1]}${arr.length-1 === i ? ". " : ", "}`));
				return res;
			});
		}else{
			modPrevValue.forEach((item) => {
				const en = Object.entries(item);
				const res = en.forEach((e, i, arr) => (string = string += `${e[0]}: ${e[1]}${arr.length-1 === i ? ". " : ", "}`));
				return res;
			});
		}
		modPrevValue = string;
	}

	if (isObject(modNewValue)) {
		let string = "";
		if (modNewValue.some((item) => Object.keys(item).includes("type"))){
			modNewValue.forEach((item, ind) => {
				const en = Object.entries(item);
				const res = en.forEach((e, i, arr) => (string = string += `${e[0]}(${ind+1}): ${e[1]}${arr.length-1 === i ? ". " : ", "}`));
				return res;
			});
		}else{
			modNewValue.forEach((item) => {
				const en = Object.entries(item);
				const res = en.forEach((e, i, arr) => (string = string += `${e[0]}: ${e[1]}${arr.length-1 === i ? ". " : ", "}`));
				return res;
			});
		}
		modNewValue = string;
	}

	if(typeof modPrevValue !== "string" || typeof modNewValue !== "string"){
		modNewValue = String(modNewValue)
		modPrevValue = String(modPrevValue)
	}

	return (
		<div className="flex gap-x-[1rem] max-w-full items-center flex-wrap">
			<ValueText className="">
				{modPrevValue.trim() === "" ? "Nothing was provided" : modPrevValue}
			</ValueText>
			<ArrowIcon />
			<ValueText className="">
				{modNewValue.trim() === "" ? "Nothing provided" : modNewValue}
			</ValueText>
		</div>
	);
};

HistoryTicketValueChange.propTypes = {
	prevValue: PropTypes.any,
	newValue: PropTypes.any,
};

export default HistoryTicketValueChange;
