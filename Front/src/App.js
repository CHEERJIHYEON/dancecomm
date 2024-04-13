// firebase.js에서 db를 import
import { db } from './firebase';
// firestore의 메서드 import
import { doc, getDoc } from 'firebase/firestore';

import React, { useEffect } from "react";
import "./App.css";
import MapContainer from "./MapContainer";
import SearchPlace from "./SearchPlace";

function App() {
  const [test, setTest] = useState()
  // async - await로 데이터 fetch 대기
  async function getTest() {
    // document에 대한 참조 생성
    const docRef = doc(db, "danceAcademy", "2Gvt8V7SYFKbynpKZ7iz");
    // 참조에 대한 Snapshot 쿼리
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setTest(docSnap.data())
    }
  };

  // 최초 마운트 시에 getTest import
  useEffect(() => {
    getTest()
  }, [])

  return (
    // <div className="md:flex md:items-center md:justify-between">
    <div className="App">
      <div className="title">
        <h2 className="titleDetails">춤 커뮤니티</h2>
      </div>
      <MapContainer />
      <SearchPlace />
      <div className="dbTest">
        {test !== undefined &&
        <div>{test.bplcnm}</div>}
    </div>
    </div>
  );
}

export default App;
