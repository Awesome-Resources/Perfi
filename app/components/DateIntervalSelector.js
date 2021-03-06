import React from 'react';
import PropTypes from 'prop-types';
import Selector from './Selector';
import TextItem from './TextItem';
import TextWithIcons from './TextWithIcons';
import { toUpperCaseFirstLetter } from '../utils/stringHelper';
import appStyles from '../styles/AppStyles';

const intervals = ['day', 'week', 'month', 'year'];

const IntervalTrigger = name => (
  <TextWithIcons
    text={toUpperCaseFirstLetter(name)}
    textStyle={appStyles.headerTextStyle}
    rightIcon="menu-down"
    color="white"
  />
);

const DateIntervalSelector = ({ currentInterval, onSelect }) => (
  <Selector
    options={intervals}
    currentOption={currentInterval}
    optionRenderer={TextItem}
    triggerRenderer={IntervalTrigger}
    onSelect={onSelect}
  />
);

DateIntervalSelector.propTypes = {
  currentInterval: PropTypes.string,
  onSelect: PropTypes.func,
};

export default DateIntervalSelector;
