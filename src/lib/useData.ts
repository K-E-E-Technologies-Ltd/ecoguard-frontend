import {useEffect,useState,useCallback} from 'react';
import {api} from './api';
export function useData<T>(path:string|null,interval=0,tick=0){
  const [data,setData]=useState<T|null>(null),[error,setError]=useState(''),[loading,setLoading]=useState(true),[poll,setPoll]=useState(0);
  const reload=useCallback(()=>setPoll(n=>n+1),[]);
  useEffect(()=>{let active=true;const controller=new AbortController();if(!path){setLoading(false);setData(null);return;}
   setError('');setLoading(true);api<T>(path,{signal:controller.signal}).then(d=>{if(active)setData(d);}).catch(e=>{if(active)setError(e.message);}).finally(()=>{if(active)setLoading(false);});
   return()=>{active=false;controller.abort();};
  },[path,poll,tick]);
 useEffect(()=>{if(!path||!interval)return;const id=setInterval(()=>{if(!document.hidden)reload();},interval);return()=>clearInterval(id);},[path,interval,reload]);
 return {data,error,loading,reload,setData};
}
