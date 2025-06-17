import { useMemo } from "react";
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms";
import { RecoilRoot } from "recoil";
import { useRecoilValue } from "recoil";
import { useRecoilState } from "recoil";


function App() {
  
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const notificationsAtomCount = useRecoilValue(notificationAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  // const totalNotificationCount = useRecoilValue(totalNotificationSelector)

  // Doing the same thing using useMemo Hook
  const totalNotificationCount = useMemo(() => {
    return networkNotificationCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
  }, [networkNotificationCount, jobsAtomCount, notificationsAtomCount, messagingAtomCount])


  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount}) </button>
      <button>Messaging ({messagingAtomCount}) </button>
      <button>Notifications ({notificationsAtomCount}) </button>

      <button onClick={() => {
        setMessagingAtomCount(messagingAtomCount + 1);
      }}>Me ({totalNotificationCount})</button>
    </>
  );
}


export default App;
