"use client";
import {useEffect,useRef,useState, type FormEvent} from 'react';
import {Dialog,DialogContent,DialogTitle,DialogDescription,DialogClose} from '@/components/ui/dialog';
import {Select,SelectTrigger,SelectValue,SelectContent,SelectItem} from '@/components/ui/select';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Button} from '@/components/ui/button';

function Choice({id,label,placeholder,options,value,onChange,error}:{id:string,label:string,placeholder:string,options:string[],value:string,onChange:(value:string)=>void,error:boolean}){
 return <div className="consult-field"><label htmlFor={id}>{label}</label><Select value={value} onValueChange={onChange}><SelectTrigger id={id} className="consult-select" aria-invalid={error} aria-describedby={error?id+'-error':undefined}><SelectValue placeholder={placeholder}/><img src="/musium-media-v2/consultation-dropdown.svg" alt="" /></SelectTrigger><SelectContent className="consult-options" position="popper" align="start">{options.map(option=><SelectItem key={option} value={option}>{option}</SelectItem>)}</SelectContent></Select>{error&&<p className="consult-error" id={id+'-error'}>Please select an option.</p>}</div>;
}
export default function Consultation(){
 const [open,setOpen]=useState(false),[received,setReceived]=useState(false),[student,setStudent]=useState(''),[experience,setExperience]=useState(''),[format,setFormat]=useState(''),[attempt,setAttempt]=useState(false);
 const [sending,setSending]=useState(false),[sendError,setSendError]=useState('');
 const submitting=useRef(false);
 const opener=useRef<HTMLElement|null>(null);
 useEffect(()=>{const buttons=Array.from(document.querySelectorAll<HTMLElement>('[data-name="Button"]')).filter(el=>el.textContent?.includes('Book Free Consultation'));const cleanups=buttons.map(el=>{el.setAttribute('role','button');el.setAttribute('aria-haspopup','dialog');el.tabIndex=0;el.style.cursor='pointer';const show=()=>{opener.current=el;setReceived(false);setSendError('');setAttempt(false);setStudent('');setExperience('');setFormat('');setOpen(true);};const key=(e:KeyboardEvent)=>{if(e.target===el&&(e.key==='Enter'||e.key===' ')){e.preventDefault();show();}};el.addEventListener('click',show);el.addEventListener('keydown',key);return()=>{el.removeEventListener('click',show);el.removeEventListener('keydown',key);};});return()=>cleanups.forEach(f=>f());},[]);
 const submit=async(event:FormEvent<HTMLFormElement>)=>{
  event.preventDefault();if(submitting.current)return;setAttempt(true);setSendError('');
  if(!student||!experience||!format){const id=!student?'consult-student':!experience?'consult-experience':'consult-format';document.getElementById(id)?.focus();return;}
  const form=event.currentTarget;const fields=new FormData(form);
  if(String(fields.get('_honey')||''))return;
  submitting.current=true;setSending(true);
  try{
   const response=await fetch('https://formspree.io/f/mvkgybgj',{
    method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},
    body:JSON.stringify({name:String(fields.get('name')||'').trim(),email:String(fields.get('email')||'').trim(),
     'Student':student,'Student age':student==='Adult'?'Adult':String(fields.get('age')||'Not provided'),
     'Piano experience':experience,'Lesson format':format,'Availability (Chicago time)':String(fields.get('availability')||'Not provided'),
     'Goals and questions':String(fields.get('goals')||'Not provided'),
     subject:'Musium — New Free Consultation Request',source:window.location.origin+window.location.pathname,_gotcha:''}),
    signal:AbortSignal.timeout(30000)
   });
   const result=await response.json();
   if(!response.ok||typeof result!=='object'||result===null||!('ok' in result)||result.ok!==true)throw new Error('not accepted');
   setReceived(true);
  }catch{setSendError('We could not confirm your request. Your entries are still here. Please try again, or email pianomusium@gmail.com.');}
  finally{submitting.current=false;setSending(false);}
 };
 return <Dialog open={open} onOpenChange={value=>{if(!sending)setOpen(value);}}><DialogContent className={'consult-popup'+(received?' consult-confirm':'')} showCloseButton={false} onCloseAutoFocus={e=>{e.preventDefault();opener.current?.focus();}}>
 {received?<><DialogTitle>Request received</DialogTitle><DialogDescription className="consult-strong">Thank you for your interest in piano lessons!</DialogDescription><p>Dami will contact you by email to discuss your goals and arrange a consultation.</p><p className="consult-muted">Your consultation is not booked yet. Please wait for an email confirming the time.</p><Button className="consult-primary" onClick={()=>setOpen(false)}>Back to Website</Button><p className="consult-muted">Questions?<br/><a href="mailto:pianomusium@gmail.com">pianomusium@gmail.com</a></p></>:<>
 <div className="consult-title-row"><DialogTitle>Book a Free Consultation</DialogTitle><DialogClose aria-label="Close consultation" className="consult-close">×</DialogClose></div>
 <DialogDescription>Tell Dami a little about your piano goals. She will email you to arrange a free consultation.</DialogDescription>
 <p className="consult-muted">* Required fields</p>
 <form onSubmit={submit} className="consult-form" aria-busy={sending}>
 <input name="_honey" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{display:'none'}}/>
 <fieldset disabled={sending} style={{display:'contents'}}>
 <div className="consult-columns"><div className="consult-field"><label htmlFor="consult-name">Your name *</label><Input id="consult-name" name="name" autoComplete="name" placeholder="Name of adult or parent / guardian" required maxLength={120}/></div><div className="consult-field"><label htmlFor="consult-email">Email address *</label><Input id="consult-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/></div></div>
 <div className="consult-columns"><Choice id="consult-student" label="Who are lessons for? *" placeholder="Adult / Child or teen" options={['Adult','Child or teen']} value={student} onChange={setStudent} error={attempt&&!student}/><div className="consult-field"><label htmlFor="consult-age">Student age (if under 18)</label><Input id="consult-age" name="age" type="number" min={1} max={17} placeholder="Age only — no birth date needed" disabled={student==='Adult'}/></div></div>
 <Choice id="consult-experience" label="Piano experience *" placeholder="New beginner / Some experience / Returning / Advanced" options={['New beginner','Some experience','Returning','Advanced']} value={experience} onChange={setExperience} error={attempt&&!experience}/>
 <Choice id="consult-format" label="Preferred lesson format *" placeholder="Schaumburg studio / Online / Not sure" options={['Schaumburg studio','Online','Not sure']} value={format} onChange={setFormat} error={attempt&&!format}/>
 <div className="consult-field"><label htmlFor="consult-availability">When are you usually available? (optional)</label><Input id="consult-availability" name="availability" placeholder="e.g. Weekdays after 4 pm or Saturday mornings" maxLength={300}/></div>
 <p className="consult-muted">Times are in Chicago time. This is a request; your consultation time will be confirmed by email.</p>
 <div className="consult-field"><label htmlFor="consult-goals">What would you like help with? (optional)</label><Textarea id="consult-goals" name="goals" placeholder="Your goals, questions, or anything Dami should know…" maxLength={2000}/></div>
 <p className="consult-muted">Your details will be used to respond to your consultation request.</p>
 </fieldset>
 {sendError&&<p className="consult-error" role="alert">{sendError}</p>}
 <Button type="submit" className="consult-primary" disabled={sending}>{sending?'Sending…':'Request Free Consultation'}</Button>
 <p className="consult-muted">Prefer email? <a href="mailto:pianomusium@gmail.com">pianomusium@gmail.com</a></p>

 </form></>}
 </DialogContent></Dialog>;
}
