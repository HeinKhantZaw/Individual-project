import React from "react";
// import {useBleeps} from "@arwes/react-bleeps";
import {Animator} from "@arwes/react-animator";
// import {BleepsOnAnimator} from "@arwes/react-core";
import {Animated} from "@arwes/react-animated";
import {FrameSVGCorners} from "@arwes/react";
import {createAppTheme} from '@arwes/theme';
import {Text} from "@arwes/react-text";
import Button from "arwes/lib/Button/index.js";
import {useNavigate} from "react-router-dom";

const Card = ({isIntro, message, title, width}) => {
    const theme = createAppTheme();
    // const bleeps = useBleeps();
    const navigate = useNavigate();

    return (
        <Animator merge combine manager='stagger'>
            {/*<BleepsOnAnimator*/}
            {/*    transitions={{entering: isIntro ? 'intro' : 'expand'}}*/}
            {/*    continuous*/}
            {/*/>*/}
            <Animated
                className='card'
                style={{
                    zIndex: 100,
                    position: isIntro ? 'relative' : 'absolute',
                    display: 'block',
                    width: width || '300px',
                    margin: theme.space([4, 'auto']),
                    padding: theme.space(8),
                    textAlign: 'center'
                }}
                // animated={[aaVisibility(), aa('y', '10rem', 0)]}
                // onClick={() => bleeps.click?.play()}
            >
                {/* Frame decoration and shape colors defined by CSS. */}
                <style>{`
          .card .arwes-react-frames-framesvg [data-name=bg] {
            color: ${isIntro ? theme.colors.primary.deco(1) : "rgba(38,38,38,0.77)"};
          }
          .card .arwes-react-frames-framesvg [data-name=line] {
            color: ${theme.colors.primary.main(4)};
          }
        `}</style>

                <Animator>
                    <FrameSVGCorners strokeWidth={2}/>
                </Animator>

                <Animator>
                    <Text className={isIntro ? "font-medium text-3xl" : "font-semibold text-xl"}
                          style={{
                              textShadow: '0 0 3px #000',
                              color: theme.colors.primary.main(4),
                              borderBottomWidth: '1px',
                              fontFamily: theme.fontFamilies.code,
                              borderBottomStyle: 'solid',
                              borderBottomColor: theme.colors.primary.main(4),
                              paddingBottom: theme.space(3),
                          }}
                    >
                        {title}
                    </Text>
                </Animator>

                <Animator>
                    <Text style={{
                        textShadow: '0 0 1px #000',
                        color: theme.colors.info.main(1),
                        fontFamily: theme.fontFamilies.code,
                        paddingTop: theme.space(3),
                    }}>
                        {message}
                    </Text>
                </Animator>
            </Animated>
            {isIntro &&
                <div className={"mt-6 flex items-center justify-center"}>
                    <Button animate className={"font-semibold text-lg custom-button"} id={"enter-btn"}
                            buttonProps={{
                                // onMouseEnter: () => bleeps.hover?.play(),
                                onClick: () => navigate("home"),
                            }}
                    >
                        Enter
                    </Button>
                </div>
            }
        </Animator>
    );
};
export default Card;
