import React, {useEffect, useState} from 'react';

const CarDistance = ({setDistance, distance, mpg, setMpg, setResult, result, tank, setTank}) => {

    useEffect(() => {
        const dis = tank * mpg;
        setResult(dis >= distance ? 'Doedem' : 'NE doedem');
    }, [tank, mpg, distance]);
    return (
        <div>
            <div>
                <label htmlFor="tank">Tank, Gal</label>
                <input type="number" name="tank" onChange={e => setTank(+e.target.value)}/>
            </div>
            <div>
                <label htmlFor="mpg">Speed, MPG</label>
                <input type="number" name="mpg" onChange={e => setMpg(+e.target.value)}/>
            </div>
            <div>
                <label htmlFor="distance">Distance, M</label>
                <input type="number" name="distance" onChange={e => setDistance(+e.target.value)}/>
            </div>
            <hr/>
            {result}
        </div>
    );
};

export default CarDistance;