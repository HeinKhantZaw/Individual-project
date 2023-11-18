import React from 'react';
import {withStyles, Frame} from 'arwes';

const styles = (theme) => ({
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
        color: theme.color.secondary.base, // fontSize: myTheme.font.baseSize,
        lineHeight: "30px",
        [`@media (max-width: ${theme.responsive.small + 1}px)`]: {
            width: '100%',
        },
    }, frame: {
        width: "auto", padding: "0 3px", display: "inline-block",
    },
});


const SelectOption = withStyles(styles)(({
                                             classes,
                                             onChange,
                                             name,
                                             options,
                                             optionValueId,
                                             optionInnerContent,
                                             required,
                                             selected,
                                             selectClass,
                                             disabled
                                         }) => {
    return (<div>
            <label className={classes.container}>
                <Frame
                    show={true}
                    animate={true}
                    corners={4}
                    className={classes.frame}
                    layer={disabled ? "disabled" : "secondary"}
                >
                    <select name={name} onChange={onChange} className={selectClass ? selectClass : classes.select}
                            required={required} disabled={disabled}>
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
            </label>
        </div>);
})

export default SelectOption;
