import React from 'react';
import {Frame, withStyles} from 'arwes';

const styles = (theme) => {
    return {
        container: {
            [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
                display: "flex", flexDirection: "column", marginBottom: '.5em',
            },
        }, select: {
            display: "inline-block",
            margin: [4, 0],
            height: 30,
            width: 105,
            border: "none",
            outline: "none",
            boxShadow: "none",
            cursor: "pointer",
            backgroundColor: theme.background.secondary,
            color: theme.color.secondary.base,
            lineHeight: "30px",
            [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
                width: '100%',
            },
        }, selected: {
            display: "inline-block",
            margin: [4, 0],
            height: 30,
            width: 105,
            border: "none",
            outline: "none",
            boxShadow: "none",
            cursor: "pointer",
            backgroundColor: theme.background.success,
            color: theme.color.success.base,
            lineHeight: "30px",
            [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
                width: '100%',
            },
        },
        frame: {
            width: "auto", padding: "0 3px", display: "inline-block",
        },
    }
};


const SelectOption = withStyles(styles)(({
                                             classes,
                                             onChange,
                                             name,
                                             options,
                                             optionValueId,
                                             optionInnerContent,
                                             required,
                                             selected,
                                             currentPhase,
                                             disabled,
                                             style
                                         }) =>
{
    console.log(currentPhase);
    return (<div>
        <Frame
            show={true}
            animate={true}
            corners={4}
            className={classes.frame}
            layer={disabled ? "disabled" : currentPhase===3 ? "success" : "secondary"}
        >
            <select name={name} onChange={onChange} className={currentPhase === 3 ? classes.selected : classes.select}
                    required={required} disabled={disabled}
                    value={selected} style={style}
            >
                {options.map((option) => {
                    return (<option
                        name={name}
                        value={option[optionValueId]}
                        defaultValue={selected === option[optionValueId]}
                        key={option[optionValueId]}
                    >
                        {option[optionInnerContent]}
                    </option>);
                })}
            </select>
        </Frame>
    </div>);
})

export default SelectOption;
