import styles from "./Counter.module.css";
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {decrement, deleteCounter, increment} from "./CounterSlice";

export type CounterProps = {
    index: number
}

const Counter = (props: CounterProps) => {

    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counters[props.index])

    useEffect(() => {
        if (props.index % 4 === 3) {
            const intervalId = setInterval(() => {
                dispatch(increment(props.index))
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [count]);

    return (
        <div className={styles.row}>
            { (props.index % 4 !== 3) && (<button
                className={styles.button}
                aria-label="Decrement value"
                onClick={() => dispatch(decrement(props.index))}
            >
                -
            </button>)}
            <span className={styles.value}>{count}</span>
            {(props.index % 4 !== 3) && <button
                className={styles.button}
                aria-label="Increment value"
                onClick={() => dispatch(increment(props.index))}
            >
                +
            </button>}
            <button
                className={styles.button}
                aria-label="delete counter"
                onClick={() => dispatch(deleteCounter(props.index))}
            >
                Удалить
            </button>
        </div>
    )
}

export default Counter
