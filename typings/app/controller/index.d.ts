// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJdGood from '../../../app/controller/jdGood';
import ExportTbGood from '../../../app/controller/tbGood';
import ExportTppGood from '../../../app/controller/tppGood';

declare module 'egg' {
  interface IController {
    jdGood: ExportJdGood;
    tbGood: ExportTbGood;
    tppGood: ExportTppGood;
  }
}
