import React, {useEffect, useState} from "react";
import {Dialog, DialogActions, MobileStepper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useStyles} from "./CarouselStyles";

export function Carousel({images, step, openProp, close}) {
    const classes = useStyles();
    useEffect(() => {
        setActiveStep(step)
    }, [step])
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Dialog
            classes={{paper: classes.dialogPaper}}
            open={openProp}
            onClose={close}
        >

            <img className={classes.img} alt={images[activeStep]} src={images[activeStep]}/>
            <DialogActions className={classes.dialogActions}>
                <MobileStepper
                    className={classes.stepper}
                    variant="dots"
                    steps={images.length}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === images.length - 1}>
                            Next
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            Back
                        </Button>
                    }
                />
            </DialogActions>
        </Dialog>
    );
}