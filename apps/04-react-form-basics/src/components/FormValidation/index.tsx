// import './styles.css'
// import { type ChangeEvent, Fragment, useState } from 'react'
// import type { User } from './types.ts'
//
// export default function FormValidation() {
//   const [user, setUser] = useState<User>({ ...initialUser })
//
//   const [formErrors, setFormErrors] = useState<Record<keyof User, (value: string) => ?string>>({})
//
//   const rules: unknown = {
//     username: (value: string) => {
//       if (value.length < 3 || value.length > 12) {
//         return '用户名必须大于 3 且小于 12 个字符'
//       }
//     },
//     password: (value: string) => {
//       if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
//         return '密码必须大于 8 个字符，且至少包含一个字母和数字'
//       }
//     },
//   }
//
//   const gender = [
//     { value: 'male', label: '男' },
//     { value: 'female', label: '女' },
//   ]
//
//   const hobbies = [
//     { value: 'programming', label: '编程' },
//     { value: 'drawing', label: '绘画' },
//     { value: 'music', label: '音乐' },
//   ]
//
//   const handleInputChange = (ev: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     // eslint-disable-next-line prefer-const
//     let { value, name, type } = ev.target
//     if (type === 'checkbox') {
//       const { checked } = ev.target
//       if (checked) {
//         value = [...user.hobbies, value]
//       } else {
//         value = user.hobbies.filter((hobby) => hobby !== value)
//       }
//     }
//     setUser({
//       ...user,
//       [name]: value,
//     })
//
//     const error = rules[name] && rules[name](value)
//     setFormErrors({
//       ...formErrors,
//       [name]: error,
//     })
//   }
//
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     for (const rule of Object.keys(rules)) {
//       const error = rules[rule](user[rule]);
//       if (error) {
//         setFormErrors({
//           ...formErrors,
//           [rule]: error,
//         });
//         return;
//       }
//     }
//     console.log(user);
//   }
//
//   const handleFormReset = () => {
//     setUser({ ...initialUser })
//   }
//
//   return (
//     <main className="container">
//       <h1>用户注册</h1>
//       <form onSubmit={handleFormSubmit} onReset={handleFormReset}>
//         <label htmlFor="username">用户名</label>
//         <input
//           name="username"
//           type="text"
//           id="username"
//           value={user.username}
//           onChange={handleInputChange}
//         />
//         {formErrors.username && (
//           <span className="formError">{formErrors.username}</span>
//         )}
//         <label htmlFor="password">密码</label>
//         <input
//           name="password"
//           type="password"
//           id="password"
//           value={user.password}
//           onChange={handleInputChange}
//         />
//         {formErrors.password && (
//           <span className="formError">{formErrors.password}</span>
//         )}
//         <label htmlFor="repeatPassword">重复密码</label>
//         <input
//           name="repeatPassword"
//           type="password"
//           id="repeatPassword"
//           value={user.repeatPassword}
//           onChange={handleInputChange}
//         />
//         <label htmlFor="gender">性别</label>
//         <fieldset id="gender">
//           {gender.map((g) => (
//             <Fragment key={g.value}>
//               <input
//                 type="radio"
//                 id={g.value}
//                 name="gender"
//                 value={g.value}
//                 checked={user.gender === g.value}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor={g.value}>{g.label}</label>
//             </Fragment>
//           ))}
//         </fieldset>
//         <label htmlFor="occupation">职业</label>
//         <select
//           name="occupation"
//           id="occupation"
//           value={user.occupation}
//           onChange={handleInputChange}
//         >
//           <option value="">请选择</option>
//           <option value="frontend">前端</option>
//           <option value="backend">后端</option>
//           <option value="fullstack">全栈</option>
//         </select>
//         <label htmlFor="hobbies">兴趣</label>
//         <fieldset id="hobbies">
//           {hobbies.map((hobby) => (
//             <Fragment key={hobby.value}>
//               <input
//                 type="checkbox"
//                 name="hobbies"
//                 value={hobby.value}
//                 id={hobby.value}
//                 onChange={handleInputChange}
//                 checked={user.hobbies.includes(hobby.value)}
//               />
//               <label htmlFor={hobby.value}>{hobby.label}</label>
//             </Fragment>
//           ))}
//         </fieldset>
//         <button type="submit">提交</button>
//         <button type="reset">重置</button>
//       </form>
//       <ul>
//         <li>用户名：{user.username}</li>
//         <li>密码：{user.password}</li>
//         <li>重复密码：{user.repeatPassword}</li>
//         <li>性别：{user.gender}</li>
//         <li>职业：{user.occupation}</li>
//         <li>兴趣：{user.hobbies.join(", ")}</li>
//       </ul>
//     </main>
//   )
// }
//
// const initialUser = {
//   username: '',
//   password: '',
//   repeatPassword: '',
//   gender: '',
//   occupation: '',
//   hobbies: [],
// }