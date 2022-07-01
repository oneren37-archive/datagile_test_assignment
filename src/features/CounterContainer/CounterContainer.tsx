import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {RootState} from "../../app/store";
import {addCounter} from "../counter/CounterSlice";
import Counter from "../counter/Counter";
import styles from './CounterContainer.module.css'

const CounterContainer = () => {

    const dispatch = useAppDispatch()
    const countersCount = useAppSelector((state: RootState) => state.counters.length)

    return (
        <>
            {new Array(countersCount).fill(0).map((e, i) => <Counter index={i} key={i}/>)}
            <button className={styles.button} onClick={() => dispatch(addCounter())} >Добавить счетчик</button>
        </>
    )
}

export default CounterContainer
