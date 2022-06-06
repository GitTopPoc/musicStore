import {ProductConsumer} from "../Context";
import Instrument from "./Instrument";
import Title from "./Title";
import style from "../css/mainFilters/style.module.css"
import React, {useEffect, useState} from 'react';

const InstrumentList = () => {

    let [guitarActive, setGuitarActive] = useState(false)
    let [pianoActive, setPianoActive] = useState(false)
    let [drumActive, setDrumActive] = useState(false)
    let [kalimbaActive, setKalimbaActive] = useState(false)
    let [bendirActive, setBendirActive] = useState(false)

    let [from, setFrom] = useState(0)
    let [to, setTo] = useState(8)
    useEffect(() => {
        if (guitarActive) {
            setFrom(0)
            setTo(3)
        } else if (pianoActive) {
            setFrom(3)
            setTo(5)
        } else if (drumActive) {
            setFrom(5)
            setTo(6)
        } else if (kalimbaActive) {
            setFrom(6)
            setTo(7)
        } else if (bendirActive) {
            setFrom(7)
            setTo(8)
        } else {setFrom(0); setTo(8)}
    }, [guitarActive, pianoActive, drumActive, kalimbaActive, bendirActive])

    let filter = (instrument) => {
        // eslint-disable-next-line default-case
        switch (instrument) {
            case "guitar" :
                setGuitarActive(true)
                setPianoActive(false)
                setDrumActive(false)
                setKalimbaActive(false)
                setBendirActive(false)
                break;
            case "piano" :
                setGuitarActive(false)
                setPianoActive(true)
                setDrumActive(false)
                setKalimbaActive(false)
                setBendirActive(false)
                break;
            case "drum" :
                setGuitarActive(false)
                setPianoActive(false)
                setDrumActive(true)
                setKalimbaActive(false)
                setBendirActive(false)
                break;
            case "kalimba" :
                setGuitarActive(false)
                setPianoActive(false)
                setDrumActive(false)
                setKalimbaActive(true)
                setBendirActive(false)
                break;
            case "bendir" :
                setGuitarActive(false)
                setPianoActive(false)
                setDrumActive(false)
                setKalimbaActive(false)
                setBendirActive(true)
                break;
            case "reset" :
                setGuitarActive(false)
                setPianoActive(false)
                setDrumActive(false)
                setKalimbaActive(false)
                setBendirActive(false)
                break;
        }

    }


    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title category="Instruments"/>
                    <div className={style.filter_wrapper}>
                        <p className={style.filter_heading}>Filters:</p>
                        <button onClick={() => {
                            filter("guitar")
                        }} className={`${guitarActive && style.active} ${style.filter_button}`}>Only Guitars
                        </button>
                        <button onClick={() => {
                            filter("piano")
                        }} className={`${pianoActive && style.active} ${style.filter_button}`}>Only Pianos
                        </button>
                        <button onClick={() => {
                            filter("drum")
                        }} className={`${drumActive && style.active} ${style.filter_button}`}>Only Drums
                        </button>
                        <button onClick={() => {
                            filter("kalimba")
                        }} className={`${kalimbaActive && style.active} ${style.filter_button}`}>Only Kalimbas
                        </button>
                        <button onClick={() => {
                            filter("bendir")
                        }} className={`${bendirActive && style.active} ${style.filter_button}`}>Only Bendirs
                        </button>
                        <button onClick={() => {filter("reset")}} className={`${style.filter_button} ${style.filter_button_reset}`}>Reset</button>
                    </div>
                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                return value.storeInstruments
                                    .slice(from, to)
                                    .map((instrument) => {
                                        return (
                                            <Instrument
                                                key={instrument.id}
                                                instrument={instrument}
                                            />
                                        );
                                    });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default InstrumentList;