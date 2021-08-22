import React from 'react';
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg} = props;
  function handleSellButton() {
    const newPints = keg.pints -= 1;
    props.onClickingSell({bev