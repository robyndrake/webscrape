import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";

const response = await fetch(url);
const body = await response.text();

const $ = cheerio.load(body);

let data = $(".wikitable");

console.log(data.html());


