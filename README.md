#  Tech Concepts Explained 

---

## 1️⃣ Config Provider

```js
Config provider is context wrapper zy el use context 3ady gedn , 
the diffrence i think is that use context is mainly for function that i want to
be globally be seen in all components and the config provider is for the styling , 
so i create the config prorvider file and i wrap the whole project 
with it so i can use the tokens inside it to customize my own designs , 
its not used for styling only but styling is the main use case  


## 2️⃣ Global vs Design (Semantic) Tokens

So the tokens  are design values bs el global are raw design values for example maslan: 

Ha3ml ay variables w adeha ay value ana 3ayz (with antd there is already values gahza ) for example:

export const global = { 
  blueHazem: '#1890ff' 
}; 

So ana hena b2a 3ndy raw values b2ol feha el color da green masln el space de medium w hakza  

But in design tokens , i assign this values to a  actuall values for example masln like the primary color i could say :  

export const semantic = { 
  colorPrimary: global.blue 
}; 

So if i used colorPrimary in a component hatsm3 feha , 
anyways so why dont i use the global ones 3latol : 
cause global is used only for defining the raw value 
like the colors the fonts , You know what the color is, but not what it's used for 
it doesnt have a meaning but in design you are saying 
This specific blue is my primary color and so on like ur giving context to the raw values

## 3️⃣ Clsx

Clsx hya zyha zy el class name but it lets me to write the styling in more clean easier way , 
in addition of writing condition , so if iam using className with condition and i have many classes 
it would be too messy so clsx make it more easier and cleaner  

so if i have like this 
className={clsx (“ this is base-class will be applied kda kda “ , isActive && “ active”)}

This will output: 
base-class active  

It only apply the class if its valid = true  
if its = false it wont be apply  

## 4️⃣ Toaster

Toaster is a pop up message appears mo2aktn on the ui zy el aleart wl error w kda y3ny  

But antd has it own system like message and notfication  
message is simpler i can use it like:

message.succes(“alooooo”) 

and i can controll duration and position of it also , 

but notfication is more customizable ,

but toasts without antd must be imported from library like react-hot-toast then use it like this for example:  
jsx
Copy
Edit
<Toaster 
  position="top-right" 
  toastOptions={{ 
    duration: 3000, 
    style: { 
      background: '#333', 
      color: 'red', 
    }, 
  }} 
/>
