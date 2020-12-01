import { Route, ActivatedRoute } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { Component, OnInit} from "@angular/core";

import { Verse } from '../verse';
import { VerseService } from '../verse.service';

import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
const { webkitSpeechRecognition }: IWindow = <IWindow>window;


@Component({
  
  selector: "app-souar",
  templateUrl: "./souar.component.html",
  styleUrls: ["./souar.component.css"],
})
export class SouarComponent implements OnInit {
  //Lets initiate Record OBJ
  private record;
  //Will use this flag for detect recording
  private recording = false;
  //Url of Blob
  private url;
  private recordingaudio;
  private error;



  souratInfo = [{
    "id": 1,
    "chapterNumber": 1,
    "bismillahPre": false,
    "revelationOrder": 5,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Fātiĥah",
    "nameArabic": "الفاتحة",
    "nameSimple": "Al-Fatihah",
    "versesCount": 7,
    "pages": [
      1,
      1
    ],
    "translatedName": "The Opener"
  },
  {
    "id": 2,
    "chapterNumber": 2,
    "bismillahPre": true,
    "revelationOrder": 87,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Baqarah",
    "nameArabic": "البقرة",
    "nameSimple": "Al-Baqarah",
    "versesCount": 286,
    "pages": [
      2,
      49
    ],
    "translatedName": "The Cow"
  },
  {
    "id": 3,
    "chapterNumber": 3,
    "bismillahPre": true,
    "revelationOrder": 89,
    "revelationPlace": "madinah",
    "nameComplex": "Āli `Imrān",
    "nameArabic": "آل عمران",
    "nameSimple": "Ali 'Imran",
    "versesCount": 200,
    "pages": [
      50,
      76
    ],
    "translatedName": "Family of Imran"
  },
  {
    "id": 4,
    "chapterNumber": 4,
    "bismillahPre": true,
    "revelationOrder": 92,
    "revelationPlace": "madinah",
    "nameComplex": "An-Nisā",
    "nameArabic": "النساء",
    "nameSimple": "An-Nisa",
    "versesCount": 176,
    "pages": [
      77,
      106
    ],
    "translatedName": "The Women"
  },
  {
    "id": 5,
    "chapterNumber": 5,
    "bismillahPre": true,
    "revelationOrder": 112,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Mā'idah",
    "nameArabic": "المائدة",
    "nameSimple": "Al-Ma'idah",
    "versesCount": 120,
    "pages": [
      106,
      127
    ],
    "translatedName": "The Table Spread"
  },
  {
    "id": 6,
    "chapterNumber": 6,
    "bismillahPre": true,
    "revelationOrder": 55,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'An`ām",
    "nameArabic": "الأنعام",
    "nameSimple": "Al-An'am",
    "versesCount": 165,
    "pages": [
      128,
      150
    ],
    "translatedName": "The Cattle"
  },
  {
    "id": 7,
    "chapterNumber": 7,
    "bismillahPre": true,
    "revelationOrder": 39,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'A`rāf",
    "nameArabic": "الأعراف",
    "nameSimple": "Al-A'raf",
    "versesCount": 206,
    "pages": [
      151,
      176
    ],
    "translatedName": "The Heights"
  },
  {
    "id": 8,
    "chapterNumber": 8,
    "bismillahPre": true,
    "revelationOrder": 88,
    "revelationPlace": "madinah",
    "nameComplex": "Al-'Anfāl",
    "nameArabic": "الأنفال",
    "nameSimple": "Al-Anfal",
    "versesCount": 75,
    "pages": [
      177,
      186
    ],
    "translatedName": "The Spoils of War"
  },
  {
    "id": 9,
    "chapterNumber": 9,
    "bismillahPre": false,
    "revelationOrder": 113,
    "revelationPlace": "madinah",
    "nameComplex": "At-Tawbah",
    "nameArabic": "التوبة",
    "nameSimple": "At-Tawbah",
    "versesCount": 129,
    "pages": [
      187,
      207
    ],
    "translatedName": "The Repentance"
  },
  {
    "id": 10,
    "chapterNumber": 10,
    "bismillahPre": true,
    "revelationOrder": 51,
    "revelationPlace": "makkah",
    "nameComplex": "Yūnus",
    "nameArabic": "يونس",
    "nameSimple": "Yunus",
    "versesCount": 109,
    "pages": [
      208,
      221
    ],
    "translatedName": "Jonah"
  },
  {
    "id": 11,
    "chapterNumber": 11,
    "bismillahPre": true,
    "revelationOrder": 52,
    "revelationPlace": "makkah",
    "nameComplex": "Hūd",
    "nameArabic": "هود",
    "nameSimple": "Hud",
    "versesCount": 123,
    "pages": [
      221,
      235
    ],
    "translatedName": "Hud"
  },
  {
    "id": 12,
    "chapterNumber": 12,
    "bismillahPre": true,
    "revelationOrder": 53,
    "revelationPlace": "makkah",
    "nameComplex": "Yūsuf",
    "nameArabic": "يوسف",
    "nameSimple": "Yusuf",
    "versesCount": 111,
    "pages": [
      235,
      248
    ],
    "translatedName": "Joseph"
  },
  {
    "id": 13,
    "chapterNumber": 13,
    "bismillahPre": true,
    "revelationOrder": 96,
    "revelationPlace": "madinah",
    "nameComplex": "Ar-Ra`d",
    "nameArabic": "الرعد",
    "nameSimple": "Ar-Ra'd",
    "versesCount": 43,
    "pages": [
      249,
      255
    ],
    "translatedName": "The Thunder"
  },
  {
    "id": 14,
    "chapterNumber": 14,
    "bismillahPre": true,
    "revelationOrder": 72,
    "revelationPlace": "makkah",
    "nameComplex": "Ibrāhīm",
    "nameArabic": "ابراهيم",
    "nameSimple": "Ibrahim",
    "versesCount": 52,
    "pages": [
      255,
      261
    ],
    "translatedName": "Abrahim"
  },
  {
    "id": 15,
    "chapterNumber": 15,
    "bismillahPre": true,
    "revelationOrder": 54,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Ĥijr",
    "nameArabic": "الحجر",
    "nameSimple": "Al-Hijr",
    "versesCount": 99,
    "pages": [
      262,
      267
    ],
    "translatedName": "The Rocky Tract"
  },
  {
    "id": 16,
    "chapterNumber": 16,
    "bismillahPre": true,
    "revelationOrder": 70,
    "revelationPlace": "makkah",
    "nameComplex": "An-Naĥl",
    "nameArabic": "النحل",
    "nameSimple": "An-Nahl",
    "versesCount": 128,
    "pages": [
      267,
      281
    ],
    "translatedName": "The Bee"
  },
  {
    "id": 17,
    "chapterNumber": 17,
    "bismillahPre": true,
    "revelationOrder": 50,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'Isrā",
    "nameArabic": "الإسراء",
    "nameSimple": "Al-Isra",
    "versesCount": 111,
    "pages": [
      282,
      293
    ],
    "translatedName": "The Night Journey"
  },
  {
    "id": 18,
    "chapterNumber": 18,
    "bismillahPre": true,
    "revelationOrder": 69,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Kahf",
    "nameArabic": "الكهف",
    "nameSimple": "Al-Kahf",
    "versesCount": 110,
    "pages": [
      293,
      304
    ],
    "translatedName": "The Cave"
  },
  {
    "id": 19,
    "chapterNumber": 19,
    "bismillahPre": true,
    "revelationOrder": 44,
    "revelationPlace": "makkah",
    "nameComplex": "Maryam",
    "nameArabic": "مريم",
    "nameSimple": "Maryam",
    "versesCount": 98,
    "pages": [
      305,
      312
    ],
    "translatedName": "Mary"
  },
  {
    "id": 20,
    "chapterNumber": 20,
    "bismillahPre": true,
    "revelationOrder": 45,
    "revelationPlace": "makkah",
    "nameComplex": "Ţāhā",
    "nameArabic": "طه",
    "nameSimple": "Taha",
    "versesCount": 135,
    "pages": [
      312,
      321
    ],
    "translatedName": "Ta-Ha"
  },
  {
    "id": 21,
    "chapterNumber": 21,
    "bismillahPre": true,
    "revelationOrder": 73,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'Anbyā",
    "nameArabic": "الأنبياء",
    "nameSimple": "Al-Anbya",
    "versesCount": 112,
    "pages": [
      322,
      331
    ],
    "translatedName": "The Prophets"
  },
  {
    "id": 22,
    "chapterNumber": 22,
    "bismillahPre": true,
    "revelationOrder": 103,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Ĥaj",
    "nameArabic": "الحج",
    "nameSimple": "Al-Haj",
    "versesCount": 78,
    "pages": [
      332,
      341
    ],
    "translatedName": "The Pilgrimage"
  },
  {
    "id": 23,
    "chapterNumber": 23,
    "bismillahPre": true,
    "revelationOrder": 74,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Mu'minūn",
    "nameArabic": "المؤمنون",
    "nameSimple": "Al-Mu'minun",
    "versesCount": 118,
    "pages": [
      342,
      349
    ],
    "translatedName": "The Believers"
  },
  {
    "id": 24,
    "chapterNumber": 24,
    "bismillahPre": true,
    "revelationOrder": 102,
    "revelationPlace": "madinah",
    "nameComplex": "An-Nūr",
    "nameArabic": "النور",
    "nameSimple": "An-Nur",
    "versesCount": 64,
    "pages": [
      350,
      359
    ],
    "translatedName": "The Light"
  },
  {
    "id": 25,
    "chapterNumber": 25,
    "bismillahPre": true,
    "revelationOrder": 42,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Furqān",
    "nameArabic": "الفرقان",
    "nameSimple": "Al-Furqan",
    "versesCount": 77,
    "pages": [
      359,
      366
    ],
    "translatedName": "The Criterian"
  },
  {
    "id": 26,
    "chapterNumber": 26,
    "bismillahPre": true,
    "revelationOrder": 47,
    "revelationPlace": "makkah",
    "nameComplex": "Ash-Shu`arā",
    "nameArabic": "الشعراء",
    "nameSimple": "Ash-Shu'ara",
    "versesCount": 227,
    "pages": [
      367,
      376
    ],
    "translatedName": "The Poets"
  },
  {
    "id": 27,
    "chapterNumber": 27,
    "bismillahPre": true,
    "revelationOrder": 48,
    "revelationPlace": "makkah",
    "nameComplex": "An-Naml",
    "nameArabic": "النمل",
    "nameSimple": "An-Naml",
    "versesCount": 93,
    "pages": [
      377,
      385
    ],
    "translatedName": "The Ant"
  },
  {
    "id": 28,
    "chapterNumber": 28,
    "bismillahPre": true,
    "revelationOrder": 49,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Qaşaş",
    "nameArabic": "القصص",
    "nameSimple": "Al-Qasas",
    "versesCount": 88,
    "pages": [
      385,
      396
    ],
    "translatedName": "The Stories"
  },
  {
    "id": 29,
    "chapterNumber": 29,
    "bismillahPre": true,
    "revelationOrder": 85,
    "revelationPlace": "makkah",
    "nameComplex": "Al-`Ankabūt",
    "nameArabic": "العنكبوت",
    "nameSimple": "Al-'Ankabut",
    "versesCount": 69,
    "pages": [
      396,
      404
    ],
    "translatedName": "The Spider"
  },
  {
    "id": 30,
    "chapterNumber": 30,
    "bismillahPre": true,
    "revelationOrder": 84,
    "revelationPlace": "makkah",
    "nameComplex": "Ar-Rūm",
    "nameArabic": "الروم",
    "nameSimple": "Ar-Rum",
    "versesCount": 60,
    "pages": [
      404,
      410
    ],
    "translatedName": "The Romans"
  },
  {
    "id": 31,
    "chapterNumber": 31,
    "bismillahPre": true,
    "revelationOrder": 57,
    "revelationPlace": "makkah",
    "nameComplex": "Luqmān",
    "nameArabic": "لقمان",
    "nameSimple": "Luqman",
    "versesCount": 34,
    "pages": [
      411,
      414
    ],
    "translatedName": "Luqman"
  },
  {
    "id": 32,
    "chapterNumber": 32,
    "bismillahPre": true,
    "revelationOrder": 75,
    "revelationPlace": "makkah",
    "nameComplex": "As-Sajdah",
    "nameArabic": "السجدة",
    "nameSimple": "As-Sajdah",
    "versesCount": 30,
    "pages": [
      415,
      417
    ],
    "translatedName": "The Prostration"
  },
  {
    "id": 33,
    "chapterNumber": 33,
    "bismillahPre": true,
    "revelationOrder": 90,
    "revelationPlace": "madinah",
    "nameComplex": "Al-'Aĥzāb",
    "nameArabic": "الأحزاب",
    "nameSimple": "Al-Ahzab",
    "versesCount": 73,
    "pages": [
      418,
      427
    ],
    "translatedName": "The Combined Forces"
  },
  {
    "id": 34,
    "chapterNumber": 34,
    "bismillahPre": true,
    "revelationOrder": 58,
    "revelationPlace": "makkah",
    "nameComplex": "Saba",
    "nameArabic": "سبإ",
    "nameSimple": "Saba",
    "versesCount": 54,
    "pages": [
      428,
      434
    ],
    "translatedName": "Sheba"
  },
  {
    "id": 35,
    "chapterNumber": 35,
    "bismillahPre": true,
    "revelationOrder": 43,
    "revelationPlace": "makkah",
    "nameComplex": "Fāţir",
    "nameArabic": "فاطر",
    "nameSimple": "Fatir",
    "versesCount": 45,
    "pages": [
      434,
      440
    ],
    "translatedName": "Originator"
  },
  {
    "id": 36,
    "chapterNumber": 36,
    "bismillahPre": true,
    "revelationOrder": 41,
    "revelationPlace": "makkah",
    "nameComplex": "Yā-Sīn",
    "nameArabic": "يس",
    "nameSimple": "Ya-Sin",
    "versesCount": 83,
    "pages": [
      440,
      445
    ],
    "translatedName": "Ya Sin"
  },
  {
    "id": 37,
    "chapterNumber": 37,
    "bismillahPre": true,
    "revelationOrder": 56,
    "revelationPlace": "makkah",
    "nameComplex": "Aş-Şāffāt",
    "nameArabic": "الصافات",
    "nameSimple": "As-Saffat",
    "versesCount": 182,
    "pages": [
      446,
      452
    ],
    "translatedName": "Those who set the Ranks"
  },
  {
    "id": 38,
    "chapterNumber": 38,
    "bismillahPre": true,
    "revelationOrder": 38,
    "revelationPlace": "makkah",
    "nameComplex": "Şād",
    "nameArabic": "ص",
    "nameSimple": "Sad",
    "versesCount": 88,
    "pages": [
      453,
      458
    ],
    "translatedName": "The Letter \"Saad\""
  },
  {
    "id": 39,
    "chapterNumber": 39,
    "bismillahPre": true,
    "revelationOrder": 59,
    "revelationPlace": "makkah",
    "nameComplex": "Az-Zumar",
    "nameArabic": "الزمر",
    "nameSimple": "Az-Zumar",
    "versesCount": 75,
    "pages": [
      458,
      467
    ],
    "translatedName": "The Troops"
  },
  {
    "id": 40,
    "chapterNumber": 40,
    "bismillahPre": true,
    "revelationOrder": 60,
    "revelationPlace": "makkah",
    "nameComplex": "Ghāfir",
    "nameArabic": "غافر",
    "nameSimple": "Ghafir",
    "versesCount": 85,
    "pages": [
      467,
      476
    ],
    "translatedName": "The Forgiver"
  },
  {
    "id": 41,
    "chapterNumber": 41,
    "bismillahPre": true,
    "revelationOrder": 61,
    "revelationPlace": "makkah",
    "nameComplex": "Fuşşilat",
    "nameArabic": "فصلت",
    "nameSimple": "Fussilat",
    "versesCount": 54,
    "pages": [
      477,
      482
    ],
    "translatedName": "Explained in Detail"
  },
  {
    "id": 42,
    "chapterNumber": 42,
    "bismillahPre": true,
    "revelationOrder": 62,
    "revelationPlace": "makkah",
    "nameComplex": "Ash-Shūraá",
    "nameArabic": "الشورى",
    "nameSimple": "Ash-Shuraa",
    "versesCount": 53,
    "pages": [
      483,
      489
    ],
    "translatedName": "The Consultation"
  },
  {
    "id": 43,
    "chapterNumber": 43,
    "bismillahPre": true,
    "revelationOrder": 63,
    "revelationPlace": "makkah",
    "nameComplex": "Az-Zukhruf",
    "nameArabic": "الزخرف",
    "nameSimple": "Az-Zukhruf",
    "versesCount": 89,
    "pages": [
      489,
      495
    ],
    "translatedName": "The Ornaments of Gold"
  },
  {
    "id": 44,
    "chapterNumber": 44,
    "bismillahPre": true,
    "revelationOrder": 64,
    "revelationPlace": "makkah",
    "nameComplex": "Ad-Dukhān",
    "nameArabic": "الدخان",
    "nameSimple": "Ad-Dukhan",
    "versesCount": 59,
    "pages": [
      496,
      498
    ],
    "translatedName": "The Smoke"
  },
  {
    "id": 45,
    "chapterNumber": 45,
    "bismillahPre": true,
    "revelationOrder": 65,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Jāthiyah",
    "nameArabic": "الجاثية",
    "nameSimple": "Al-Jathiyah",
    "versesCount": 37,
    "pages": [
      499,
      502
    ],
    "translatedName": "The Crouching"
  },
  {
    "id": 46,
    "chapterNumber": 46,
    "bismillahPre": true,
    "revelationOrder": 66,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'Aĥqāf",
    "nameArabic": "الأحقاف",
    "nameSimple": "Al-Ahqaf",
    "versesCount": 35,
    "pages": [
      502,
      506
    ],
    "translatedName": "The Wind-Curved Sandhills"
  },
  {
    "id": 47,
    "chapterNumber": 47,
    "bismillahPre": true,
    "revelationOrder": 95,
    "revelationPlace": "madinah",
    "nameComplex": "Muĥammad",
    "nameArabic": "محمد",
    "nameSimple": "Muhammad",
    "versesCount": 38,
    "pages": [
      507,
      510
    ],
    "translatedName": "Muhammad"
  },
  {
    "id": 48,
    "chapterNumber": 48,
    "bismillahPre": true,
    "revelationOrder": 111,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Fatĥ",
    "nameArabic": "الفتح",
    "nameSimple": "Al-Fath",
    "versesCount": 29,
    "pages": [
      511,
      515
    ],
    "translatedName": "The Victory"
  },
  {
    "id": 49,
    "chapterNumber": 49,
    "bismillahPre": true,
    "revelationOrder": 106,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Ĥujurāt",
    "nameArabic": "الحجرات",
    "nameSimple": "Al-Hujurat",
    "versesCount": 18,
    "pages": [
      515,
      517
    ],
    "translatedName": "The Rooms"
  },
  {
    "id": 50,
    "chapterNumber": 50,
    "bismillahPre": true,
    "revelationOrder": 34,
    "revelationPlace": "makkah",
    "nameComplex": "Qāf",
    "nameArabic": "ق",
    "nameSimple": "Qaf",
    "versesCount": 45,
    "pages": [
      518,
      520
    ],
    "translatedName": "The Letter \"Qaf\""
  },
  {
    "id": 51,
    "chapterNumber": 51,
    "bismillahPre": true,
    "revelationOrder": 67,
    "revelationPlace": "makkah",
    "nameComplex": "Adh-Dhāriyāt",
    "nameArabic": "الذاريات",
    "nameSimple": "Adh-Dhariyat",
    "versesCount": 60,
    "pages": [
      520,
      523
    ],
    "translatedName": "The Winnowing Winds"
  },
  {
    "id": 52,
    "chapterNumber": 52,
    "bismillahPre": true,
    "revelationOrder": 76,
    "revelationPlace": "makkah",
    "nameComplex": "Aţ-Ţūr",
    "nameArabic": "الطور",
    "nameSimple": "At-Tur",
    "versesCount": 49,
    "pages": [
      523,
      525
    ],
    "translatedName": "The Mount"
  },
  {
    "id": 53,
    "chapterNumber": 53,
    "bismillahPre": true,
    "revelationOrder": 23,
    "revelationPlace": "makkah",
    "nameComplex": "An-Najm",
    "nameArabic": "النجم",
    "nameSimple": "An-Najm",
    "versesCount": 62,
    "pages": [
      526,
      528
    ],
    "translatedName": "The Star"
  },
  {
    "id": 54,
    "chapterNumber": 54,
    "bismillahPre": true,
    "revelationOrder": 37,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Qamar",
    "nameArabic": "القمر",
    "nameSimple": "Al-Qamar",
    "versesCount": 55,
    "pages": [
      528,
      531
    ],
    "translatedName": "The Moon"
  },
  {
    "id": 55,
    "chapterNumber": 55,
    "bismillahPre": true,
    "revelationOrder": 97,
    "revelationPlace": "madinah",
    "nameComplex": "Ar-Raĥmān",
    "nameArabic": "الرحمن",
    "nameSimple": "Ar-Rahman",
    "versesCount": 78,
    "pages": [
      531,
      534
    ],
    "translatedName": "The Beneficent"
  },
  {
    "id": 56,
    "chapterNumber": 56,
    "bismillahPre": true,
    "revelationOrder": 46,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Wāqi`ah",
    "nameArabic": "الواقعة",
    "nameSimple": "Al-Waqi'ah",
    "versesCount": 96,
    "pages": [
      534,
      537
    ],
    "translatedName": "The Inevitable"
  },
  {
    "id": 57,
    "chapterNumber": 57,
    "bismillahPre": true,
    "revelationOrder": 94,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Ĥadīd",
    "nameArabic": "الحديد",
    "nameSimple": "Al-Hadid",
    "versesCount": 29,
    "pages": [
      537,
      541
    ],
    "translatedName": "The Iron"
  },
  {
    "id": 58,
    "chapterNumber": 58,
    "bismillahPre": true,
    "revelationOrder": 105,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Mujādila",
    "nameArabic": "المجادلة",
    "nameSimple": "Al-Mujadila",
    "versesCount": 22,
    "pages": [
      542,
      545
    ],
    "translatedName": "The Pleading Woman"
  },
  {
    "id": 59,
    "chapterNumber": 59,
    "bismillahPre": true,
    "revelationOrder": 101,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Ĥashr",
    "nameArabic": "الحشر",
    "nameSimple": "Al-Hashr",
    "versesCount": 24,
    "pages": [
      545,
      548
    ],
    "translatedName": "The Exile"
  },
  {
    "id": 60,
    "chapterNumber": 60,
    "bismillahPre": true,
    "revelationOrder": 91,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Mumtaĥanah",
    "nameArabic": "الممتحنة",
    "nameSimple": "Al-Mumtahanah",
    "versesCount": 13,
    "pages": [
      549,
      551
    ],
    "translatedName": "She that is to be examined"
  },
  {
    "id": 61,
    "chapterNumber": 61,
    "bismillahPre": true,
    "revelationOrder": 109,
    "revelationPlace": "madinah",
    "nameComplex": "Aş-Şaf",
    "nameArabic": "الصف",
    "nameSimple": "As-Saf",
    "versesCount": 14,
    "pages": [
      551,
      552
    ],
    "translatedName": "The Ranks"
  },
  {
    "id": 62,
    "chapterNumber": 62,
    "bismillahPre": true,
    "revelationOrder": 110,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Jumu`ah",
    "nameArabic": "الجمعة",
    "nameSimple": "Al-Jumu'ah",
    "versesCount": 11,
    "pages": [
      553,
      554
    ],
    "translatedName": "The Congregation, Friday"
  },
  {
    "id": 63,
    "chapterNumber": 63,
    "bismillahPre": true,
    "revelationOrder": 104,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Munāfiqūn",
    "nameArabic": "المنافقون",
    "nameSimple": "Al-Munafiqun",
    "versesCount": 11,
    "pages": [
      554,
      555
    ],
    "translatedName": "The Hypocrites"
  },
  {
    "id": 64,
    "chapterNumber": 64,
    "bismillahPre": true,
    "revelationOrder": 108,
    "revelationPlace": "madinah",
    "nameComplex": "At-Taghābun",
    "nameArabic": "التغابن",
    "nameSimple": "At-Taghabun",
    "versesCount": 18,
    "pages": [
      556,
      557
    ],
    "translatedName": "The Mutual Disillusion"
  },
  {
    "id": 65,
    "chapterNumber": 65,
    "bismillahPre": true,
    "revelationOrder": 99,
    "revelationPlace": "madinah",
    "nameComplex": "Aţ-Ţalāq",
    "nameArabic": "الطلاق",
    "nameSimple": "At-Talaq",
    "versesCount": 12,
    "pages": [
      558,
      559
    ],
    "translatedName": "The Divorce"
  },
  {
    "id": 66,
    "chapterNumber": 66,
    "bismillahPre": true,
    "revelationOrder": 107,
    "revelationPlace": "madinah",
    "nameComplex": "At-Taĥrīm",
    "nameArabic": "التحريم",
    "nameSimple": "At-Tahrim",
    "versesCount": 12,
    "pages": [
      560,
      561
    ],
    "translatedName": "The Prohibtiion"
  },
  {
    "id": 67,
    "chapterNumber": 67,
    "bismillahPre": true,
    "revelationOrder": 77,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Mulk",
    "nameArabic": "الملك",
    "nameSimple": "Al-Mulk",
    "versesCount": 30,
    "pages": [
      562,
      564
    ],
    "translatedName": "The Sovereignty"
  },
  {
    "id": 68,
    "chapterNumber": 68,
    "bismillahPre": true,
    "revelationOrder": 2,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Qalam",
    "nameArabic": "القلم",
    "nameSimple": "Al-Qalam",
    "versesCount": 52,
    "pages": [
      564,
      566
    ],
    "translatedName": "The Pen"
  },
  {
    "id": 69,
    "chapterNumber": 69,
    "bismillahPre": true,
    "revelationOrder": 78,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Ĥāqqah",
    "nameArabic": "الحاقة",
    "nameSimple": "Al-Haqqah",
    "versesCount": 52,
    "pages": [
      566,
      568
    ],
    "translatedName": "The Reality"
  },
  {
    "id": 70,
    "chapterNumber": 70,
    "bismillahPre": true,
    "revelationOrder": 79,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Ma`ārij",
    "nameArabic": "المعارج",
    "nameSimple": "Al-Ma'arij",
    "versesCount": 44,
    "pages": [
      568,
      570
    ],
    "translatedName": "The Ascending Stairways"
  },
  {
    "id": 71,
    "chapterNumber": 71,
    "bismillahPre": true,
    "revelationOrder": 71,
    "revelationPlace": "makkah",
    "nameComplex": "Nūĥ",
    "nameArabic": "نوح",
    "nameSimple": "Nuh",
    "versesCount": 28,
    "pages": [
      570,
      571
    ],
    "translatedName": "Noah"
  },
  {
    "id": 72,
    "chapterNumber": 72,
    "bismillahPre": true,
    "revelationOrder": 40,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Jinn",
    "nameArabic": "الجن",
    "nameSimple": "Al-Jinn",
    "versesCount": 28,
    "pages": [
      572,
      573
    ],
    "translatedName": "The Jinn"
  },
  {
    "id": 73,
    "chapterNumber": 73,
    "bismillahPre": true,
    "revelationOrder": 3,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Muzzammil",
    "nameArabic": "المزمل",
    "nameSimple": "Al-Muzzammil",
    "versesCount": 20,
    "pages": [
      574,
      575
    ],
    "translatedName": "The Enshrouded One"
  },
  {
    "id": 74,
    "chapterNumber": 74,
    "bismillahPre": true,
    "revelationOrder": 4,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Muddaththir",
    "nameArabic": "المدثر",
    "nameSimple": "Al-Muddaththir",
    "versesCount": 56,
    "pages": [
      575,
      577
    ],
    "translatedName": "The Cloaked One"
  },
  {
    "id": 75,
    "chapterNumber": 75,
    "bismillahPre": true,
    "revelationOrder": 31,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Qiyāmah",
    "nameArabic": "القيامة",
    "nameSimple": "Al-Qiyamah",
    "versesCount": 40,
    "pages": [
      577,
      578
    ],
    "translatedName": "The Resurrection"
  },
  {
    "id": 76,
    "chapterNumber": 76,
    "bismillahPre": true,
    "revelationOrder": 98,
    "revelationPlace": "madinah",
    "nameComplex": "Al-'Insān",
    "nameArabic": "الانسان",
    "nameSimple": "Al-Insan",
    "versesCount": 31,
    "pages": [
      578,
      580
    ],
    "translatedName": "The Man"
  },
  {
    "id": 77,
    "chapterNumber": 77,
    "bismillahPre": true,
    "revelationOrder": 33,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Mursalāt",
    "nameArabic": "المرسلات",
    "nameSimple": "Al-Mursalat",
    "versesCount": 50,
    "pages": [
      580,
      581
    ],
    "translatedName": "The Emissaries"
  },
  {
    "id": 78,
    "chapterNumber": 78,
    "bismillahPre": true,
    "revelationOrder": 80,
    "revelationPlace": "makkah",
    "nameComplex": "An-Naba",
    "nameArabic": "النبإ",
    "nameSimple": "An-Naba",
    "versesCount": 40,
    "pages": [
      582,
      583
    ],
    "translatedName": "The Tidings"
  },
  {
    "id": 79,
    "chapterNumber": 79,
    "bismillahPre": true,
    "revelationOrder": 81,
    "revelationPlace": "makkah",
    "nameComplex": "An-Nāzi`āt",
    "nameArabic": "النازعات",
    "nameSimple": "An-Nazi'at",
    "versesCount": 46,
    "pages": [
      583,
      584
    ],
    "translatedName": "Those who drag forth"
  },
  {
    "id": 80,
    "chapterNumber": 80,
    "bismillahPre": true,
    "revelationOrder": 24,
    "revelationPlace": "makkah",
    "nameComplex": "`Abasa",
    "nameArabic": "عبس",
    "nameSimple": "'Abasa",
    "versesCount": 42,
    "pages": [
      585,
      585
    ],
    "translatedName": "He Frowned"
  },
  {
    "id": 81,
    "chapterNumber": 81,
    "bismillahPre": true,
    "revelationOrder": 7,
    "revelationPlace": "makkah",
    "nameComplex": "At-Takwīr",
    "nameArabic": "التكوير",
    "nameSimple": "At-Takwir",
    "versesCount": 29,
    "pages": [
      586,
      586
    ],
    "translatedName": "The Overthrowing"
  },
  {
    "id": 82,
    "chapterNumber": 82,
    "bismillahPre": true,
    "revelationOrder": 82,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'Infiţār",
    "nameArabic": "الإنفطار",
    "nameSimple": "Al-Infitar",
    "versesCount": 19,
    "pages": [
      587,
      587
    ],
    "translatedName": "The Cleaving"
  },
  {
    "id": 83,
    "chapterNumber": 83,
    "bismillahPre": true,
    "revelationOrder": 86,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Muţaffifīn",
    "nameArabic": "المطففين",
    "nameSimple": "Al-Mutaffifin",
    "versesCount": 36,
    "pages": [
      587,
      589
    ],
    "translatedName": "The Defrauding"
  },
  {
    "id": 84,
    "chapterNumber": 84,
    "bismillahPre": true,
    "revelationOrder": 83,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'Inshiqāq",
    "nameArabic": "الإنشقاق",
    "nameSimple": "Al-Inshiqaq",
    "versesCount": 25,
    "pages": [
      589,
      589
    ],
    "translatedName": "The Sundering"
  },
  {
    "id": 85,
    "chapterNumber": 85,
    "bismillahPre": true,
    "revelationOrder": 27,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Burūj",
    "nameArabic": "البروج",
    "nameSimple": "Al-Buruj",
    "versesCount": 22,
    "pages": [
      590,
      590
    ],
    "translatedName": "The Mansions of the Stars"
  },
  {
    "id": 86,
    "chapterNumber": 86,
    "bismillahPre": true,
    "revelationOrder": 36,
    "revelationPlace": "makkah",
    "nameComplex": "Aţ-Ţāriq",
    "nameArabic": "الطارق",
    "nameSimple": "At-Tariq",
    "versesCount": 17,
    "pages": [
      591,
      591
    ],
    "translatedName": "The Nightcommer"
  },
  {
    "id": 87,
    "chapterNumber": 87,
    "bismillahPre": true,
    "revelationOrder": 8,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'A`lá",
    "nameArabic": "الأعلى",
    "nameSimple": "Al-A'la",
    "versesCount": 19,
    "pages": [
      591,
      592
    ],
    "translatedName": "The Most High"
  },
  {
    "id": 88,
    "chapterNumber": 88,
    "bismillahPre": true,
    "revelationOrder": 68,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Ghāshiyah",
    "nameArabic": "الغاشية",
    "nameSimple": "Al-Ghashiyah",
    "versesCount": 26,
    "pages": [
      592,
      592
    ],
    "translatedName": "The Overwhelming"
  },
  {
    "id": 89,
    "chapterNumber": 89,
    "bismillahPre": true,
    "revelationOrder": 10,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Fajr",
    "nameArabic": "الفجر",
    "nameSimple": "Al-Fajr",
    "versesCount": 30,
    "pages": [
      593,
      594
    ],
    "translatedName": "The Dawn"
  },
  {
    "id": 90,
    "chapterNumber": 90,
    "bismillahPre": true,
    "revelationOrder": 35,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Balad",
    "nameArabic": "البلد",
    "nameSimple": "Al-Balad",
    "versesCount": 20,
    "pages": [
      594,
      594
    ],
    "translatedName": "The City"
  },
  {
    "id": 91,
    "chapterNumber": 91,
    "bismillahPre": true,
    "revelationOrder": 26,
    "revelationPlace": "makkah",
    "nameComplex": "Ash-Shams",
    "nameArabic": "الشمس",
    "nameSimple": "Ash-Shams",
    "versesCount": 15,
    "pages": [
      595,
      595
    ],
    "translatedName": "The Sun"
  },
  {
    "id": 92,
    "chapterNumber": 92,
    "bismillahPre": true,
    "revelationOrder": 9,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Layl",
    "nameArabic": "الليل",
    "nameSimple": "Al-Layl",
    "versesCount": 21,
    "pages": [
      595,
      596
    ],
    "translatedName": "The Night"
  },
  {
    "id": 93,
    "chapterNumber": 93,
    "bismillahPre": true,
    "revelationOrder": 11,
    "revelationPlace": "makkah",
    "nameComplex": "Ađ-Đuĥaá",
    "nameArabic": "الضحى",
    "nameSimple": "Ad-Duhaa",
    "versesCount": 11,
    "pages": [
      596,
      596
    ],
    "translatedName": "The Morning Hours"
  },
  {
    "id": 94,
    "chapterNumber": 94,
    "bismillahPre": true,
    "revelationOrder": 12,
    "revelationPlace": "makkah",
    "nameComplex": "Ash-Sharĥ",
    "nameArabic": "الشرح",
    "nameSimple": "Ash-Sharh",
    "versesCount": 8,
    "pages": [
      596,
      596
    ],
    "translatedName": "The Relief"
  },
  {
    "id": 95,
    "chapterNumber": 95,
    "bismillahPre": true,
    "revelationOrder": 28,
    "revelationPlace": "makkah",
    "nameComplex": "At-Tīn",
    "nameArabic": "التين",
    "nameSimple": "At-Tin",
    "versesCount": 8,
    "pages": [
      597,
      597
    ],
    "translatedName": "The Fig"
  },
  {
    "id": 96,
    "chapterNumber": 96,
    "bismillahPre": true,
    "revelationOrder": 1,
    "revelationPlace": "makkah",
    "nameComplex": "Al-`Alaq",
    "nameArabic": "العلق",
    "nameSimple": "Al-'Alaq",
    "versesCount": 19,
    "pages": [
      597,
      597
    ],
    "translatedName": "The Clot"
  },
  {
    "id": 97,
    "chapterNumber": 97,
    "bismillahPre": true,
    "revelationOrder": 25,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Qadr",
    "nameArabic": "القدر",
    "nameSimple": "Al-Qadr",
    "versesCount": 5,
    "pages": [
      598,
      598
    ],
    "translatedName": "The Power"
  },
  {
    "id": 98,
    "chapterNumber": 98,
    "bismillahPre": true,
    "revelationOrder": 100,
    "revelationPlace": "madinah",
    "nameComplex": "Al-Bayyinah",
    "nameArabic": "البينة",
    "nameSimple": "Al-Bayyinah",
    "versesCount": 8,
    "pages": [
      598,
      599
    ],
    "translatedName": "The Clear Proof"
  },
  {
    "id": 99,
    "chapterNumber": 99,
    "bismillahPre": true,
    "revelationOrder": 93,
    "revelationPlace": "madinah",
    "nameComplex": "Az-Zalzalah",
    "nameArabic": "الزلزلة",
    "nameSimple": "Az-Zalzalah",
    "versesCount": 8,
    "pages": [
      599,
      599
    ],
    "translatedName": "The Earthquake"
  },
  {
    "id": 100,
    "chapterNumber": 100,
    "bismillahPre": true,
    "revelationOrder": 14,
    "revelationPlace": "makkah",
    "nameComplex": "Al-`Ādiyāt",
    "nameArabic": "العاديات",
    "nameSimple": "Al-'Adiyat",
    "versesCount": 11,
    "pages": [
      599,
      600
    ],
    "translatedName": "The Courser"
  },
  {
    "id": 101,
    "chapterNumber": 101,
    "bismillahPre": true,
    "revelationOrder": 30,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Qāri`ah",
    "nameArabic": "القارعة",
    "nameSimple": "Al-Qari'ah",
    "versesCount": 11,
    "pages": [
      600,
      600
    ],
    "translatedName": "The Calamity"
  },
  {
    "id": 102,
    "chapterNumber": 102,
    "bismillahPre": true,
    "revelationOrder": 16,
    "revelationPlace": "makkah",
    "nameComplex": "At-Takāthur",
    "nameArabic": "التكاثر",
    "nameSimple": "At-Takathur",
    "versesCount": 8,
    "pages": [
      600,
      600
    ],
    "translatedName": "The Rivalry in world increase"
  },
  {
    "id": 103,
    "chapterNumber": 103,
    "bismillahPre": true,
    "revelationOrder": 13,
    "revelationPlace": "makkah",
    "nameComplex": "Al-`Aşr",
    "nameArabic": "العصر",
    "nameSimple": "Al-'Asr",
    "versesCount": 3,
    "pages": [
      601,
      601
    ],
    "translatedName": "The Declining Day"
  },
  {
    "id": 104,
    "chapterNumber": 104,
    "bismillahPre": true,
    "revelationOrder": 32,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Humazah",
    "nameArabic": "الهمزة",
    "nameSimple": "Al-Humazah",
    "versesCount": 9,
    "pages": [
      601,
      601
    ],
    "translatedName": "The Traducer"
  },
  {
    "id": 105,
    "chapterNumber": 105,
    "bismillahPre": true,
    "revelationOrder": 19,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Fīl",
    "nameArabic": "الفيل",
    "nameSimple": "Al-Fil",
    "versesCount": 5,
    "pages": [
      601,
      601
    ],
    "translatedName": "The Elephant"
  },
  {
    "id": 106,
    "chapterNumber": 106,
    "bismillahPre": true,
    "revelationOrder": 29,
    "revelationPlace": "makkah",
    "nameComplex": "Quraysh",
    "nameArabic": "قريش",
    "nameSimple": "Quraysh",
    "versesCount": 4,
    "pages": [
      602,
      602
    ],
    "translatedName": "Quraysh"
  },
  {
    "id": 107,
    "chapterNumber": 107,
    "bismillahPre": true,
    "revelationOrder": 17,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Mā`ūn",
    "nameArabic": "الماعون",
    "nameSimple": "Al-Ma'un",
    "versesCount": 7,
    "pages": [
      602,
      602
    ],
    "translatedName": "The Small Kindesses"
  },
  {
    "id": 108,
    "chapterNumber": 108,
    "bismillahPre": true,
    "revelationOrder": 15,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Kawthar",
    "nameArabic": "الكوثر",
    "nameSimple": "Al-Kawthar",
    "versesCount": 3,
    "pages": [
      602,
      602
    ],
    "translatedName": "The Abundance"
  },
  {
    "id": 109,
    "chapterNumber": 109,
    "bismillahPre": true,
    "revelationOrder": 18,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Kāfirūn",
    "nameArabic": "الكافرون",
    "nameSimple": "Al-Kafirun",
    "versesCount": 6,
    "pages": [
      603,
      603
    ],
    "translatedName": "The Disbelievers"
  },
  {
    "id": 110,
    "chapterNumber": 110,
    "bismillahPre": true,
    "revelationOrder": 114,
    "revelationPlace": "madinah",
    "nameComplex": "An-Naşr",
    "nameArabic": "النصر",
    "nameSimple": "An-Nasr",
    "versesCount": 3,
    "pages": [
      603,
      603
    ],
    "translatedName": "The Divine Support"
  },
  {
    "id": 111,
    "chapterNumber": 111,
    "bismillahPre": true,
    "revelationOrder": 6,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Masad",
    "nameArabic": "المسد",
    "nameSimple": "Al-Masad",
    "versesCount": 5,
    "pages": [
      603,
      603
    ],
    "translatedName": "The Palm Fiber"
  },
  {
    "id": 112,
    "chapterNumber": 112,
    "bismillahPre": true,
    "revelationOrder": 22,
    "revelationPlace": "makkah",
    "nameComplex": "Al-'Ikhlāş",
    "nameArabic": "الإخلاص",
    "nameSimple": "Al-Ikhlas",
    "versesCount": 4,
    "pages": [
      604,
      604
    ],
    "translatedName": "The Sincerity"
  },
  {
    "id": 113,
    "chapterNumber": 113,
    "bismillahPre": true,
    "revelationOrder": 20,
    "revelationPlace": "makkah",
    "nameComplex": "Al-Falaq",
    "nameArabic": "الفلق",
    "nameSimple": "Al-Falaq",
    "versesCount": 5,
    "pages": [
      604,
      604
    ],
    "translatedName": "The Daybreak"
  },
  {
    "id": 114,
    "chapterNumber": 114,
    "bismillahPre": true,
    "revelationOrder": 21,
    "revelationPlace": "makkah",
    "nameComplex": "An-Nās",
    "nameArabic": "الناس",
    "nameSimple": "An-Nas",
    "versesCount": 6,
    "pages": [
      604,
      604
    ],
    "translatedName": "The Mankind"
  }

  ]
  nAyat = [
    7,
    286,
    200,
    176,
    120,
    165,
    206,
    75,
    129,
    109,
    123,
    111,
    43,
    52,
    99,
    128,
    111,
    110,
    98,
    135,
    112,
    78,
    118,
    64,
    77,
    227,
    93,
    88,
    69,
    60,
    34,
    30,
    73,
    54,
    45,
    83,
    182,
    88,
    75,
    85,
    54,
    53,
    89,
    59,
    37,
    35,
    38,
    29,
    18,
    45,
    60,
    49,
    62,
    55,
    78,
    96,
    29,
    22,
    24,
    13,
    14,
    11,
    11,
    18,
    12,
    12,
    30,
    52,
    52,
    44,
    28,
    28,
    20,
    56,
    40,
    31,
    50,
    40,
    46,
    42,
    29,
    19,
    36,
    25,
    22,
    17,
    19,
    26,
    30,
    20,
    15,
    21,
    11,
    8,
    8,
    19,
    5,
    8,
    8,
    11,
    11,
    8,
    3,
    9,
    5,
    4,
    7,
    3,
    6,
    3,
    5,
    4,
    5,
    6
  ];
// 21Lanaguages
  Languages = [
    "Original_Arabic",
    "Chinese",
    "French",
    "engyusufali",
    "Persian",
    "Japanese",
    "Norwegian",
    "Bangla",
    "Malayalam",
    "Dutch",
    "Urdu",
    "Turkish",
    "Italian-Piccardo",
    "Russian",
    "Portuguese",
    "Swedish",
    "German",
    "Tamil",
    "Uzbek",
    "Indonesian",
    "Korean"
  ];
  lang;
  surah;
  verse;
  sa;
  word;
  searchtype;
  arabicfont
  Fonts = [
  ];
  VersesRes: Verse[] = [];

  recognition = new webkitSpeechRecognition();



  constructor(private route: ActivatedRoute,
    private verseService: VerseService,
    private domSanitizer: DomSanitizer,
  ) {


  }



  ngOnInit() {
    this.VersesRes = [];
    //the array of sourat index
    this.sa = this.getsa();

    this.recognition.continuous = true;
    this.recognition.lang = "ar-MA";
    /* "en-US"*/
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

  }

  getsa() {
    let x = [];
    let i;
    for (i = 1; i <= 114; i++) {
      x.push(i);
    }
    return x;
  }

  getva(n) {
    //this.souratInfo[n]["versesCount"]
    let x = [];
    let i;
    x.push("all");
    for (i = 1; i <= n; i++) {
      x.push(i);
    }

    return x;
  }


  getImageLink(a, b) {
    return a + "_" + b + ".png";
  }

  getMp3Link(a, b) {
    a = a.toString();
    b = b.toString();

    while (a.length < 3) {
      a = "0" + a
    }
    while (b.length < 3) {
      b = "0" + b
    }

    return a + b + ".mp3";
  }


  infoSearch(lang, surah, verse) {

    this.VersesRes = [];
    if (verse && lang && verse) {
      if (verse == "all") {
        this.verseService.getSourat(lang + "-" + surah).subscribe(objs => {
          this.VersesRes = objs;
        });
      }
      else {
        this.verseService.getVerse(lang + "-" + surah + "-" + verse).subscribe(objs => {
          this.VersesRes.push(objs[0]);
        });
      }
    }

    else {
      this.VersesRes = [];
    }

  }

  wordSearch(lang, word) {
    console.log("word", word);
    console.log("lang", lang);


    this.VersesRes = [];
    if (word != "") {

      this.verseService.searchWord(lang + "-" + word).subscribe(objs => {
        this.VersesRes = objs;
      });

    }

    /*, surah  if (word!="" && surah) {
      this.verseService.searchWordInSourat(lang + "-" + surah + "-" + word).subscribe(objs => {
        this.VersesRes = objs;
      });
    }
    else {
      
    } */

  }

  sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * Start recording.
   */
  initiateRecording() {
    this.url = null;


    this.recording = true;
    let mediaConstraints = {
      video: false,
      audio: true
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));

    this.recognition.start();
    this.recognition.onresult = (e) => {
      const transcript = e.results[e.results.length - 1][0].transcript.trim();
      console.log(transcript);
    };
  }
  successCallback(stream) {
    var options = {
      mimeType: "audio/wav",
      numberOfAudioChannels: 1
    };
    //Start Actuall Recording
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
    this.recording = false;
    this.recordingaudio = false;
    this.record.stop(this.processRecording.bind(this));
    this.recognition.stop();

  }

  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
    this.url = URL.createObjectURL(blob);
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
    this.error = 'Can not play audio in your browser';
  }

}
