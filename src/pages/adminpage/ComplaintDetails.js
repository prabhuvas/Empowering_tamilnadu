import React from 'react';
import { AdminContent } from './AdminContent';

const ComplaintDetails = () => {

  // const { id, setId, email } = useContext(AppContext);

  // const [complaint, setComplaint] = useState(null);

  //   const compRef = collection(db, "addcomplaint" , complaint.id);

  //   const getComplaint = async () => {
  //     const data = await getDoc(compRef);

  //     setComplaint(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
  //   };

  //   useEffect(() => {
  //     getComplaint();
  //   }, []);

  return (
    <div>
      <div>
        <AdminContent />
      </div>
     {/* <div>
      {id===complaint.id && <div>{complaint.department}</div> }
     </div> */}
    </div>
  )
}

export default ComplaintDetails