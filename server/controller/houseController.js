import * as houseRepository from "../repository/houseRepository.js";


export async function getHouse(req, res) {

    const rows = await houseRepository.getHouse();

    res.json(rows);

}

export async function getSortFirstHouse(req, res) {

    const rows = await houseRepository.getSortFirstHouse();

    res.json(rows);

}

export async function getSortLastHouse(req, res) {

    const rows = await houseRepository.getSortLastHouse();

    res.json(rows);

}

export async function getCollection(req, res) {
    
    const rows = await houseRepository.getCollection();

    res.json(rows);

}


