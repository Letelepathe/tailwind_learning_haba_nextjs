import Image from "next/image";
import Learnmain from "../../component/beginTailwindCss/learnmain";
import React from "react";
import Services from "../../component/beginTailwindCss/services";
import QSN from "../../component/beginTailwindCss/qsn";


export default function Home() {
  return (
    <React.Fragment>
       <Learnmain/>
       <Services/>
       <QSN/>
    </React.Fragment>
   
  );
}
