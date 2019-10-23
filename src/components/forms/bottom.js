import React from 'react'

import Form from 'gatsby-theme-dromedar/src/utils/form'
import SuccessIcon from '../../assets/success.svg'

export default () => {
    return <div className="relative mt-8 mb-10 p-4 sm:p-8 rounded-lg bg-gray-700">
        <div className="dd-form-bg"></div>
        <Form url="apply">
            {(register, response, errors) => <div className="relative">
                {1 === response.code ?
                    <div className="text-gray-200 flex items-center">
                        <SuccessIcon className="dd-success-icon mr-4 h-16 w-16" />
                        <p class="mt-0">{response.text}</p>
                    </div>
                    :
                    <div>
                        <div className="mb-8">
                            <h2 className="text-gray-300 dd-hx text-2xl">Jelentkezz!</h2>
                            <p className="mt-1 text-gray-500">Mindenkivel egyeztetünk az
                            időpontról amint összegyűlik a létszám.</p>
                            <hr className="mt-2 border-gray-600" />
                        </div>

                        <label className="block">
                            <p className="text-gray-400">Mi a motivációd? Konkrét cél?</p>
                            <input
                                className="mt-1 w-full rounded-lg py-3 px-5 bg-gray-300 text-gray-800"
                                name="motivation" type="text" maxLength="255" ref={register}
                            />
                        </label>
                        <label className="mt-4 block">
                            <p className="text-gray-400">Van-e bármilyen korábbi tpasztalatod?</p>
                            <input
                                className="mt-1 w-full rounded-lg py-3 px-5 bg-gray-300 text-gray-800"
                                name="experience" type="text" maxLength="255" ref={register}
                            />
                        </label>

                        <div className="mt-4">
                            <p className="text-gray-400">Neved és email címed:</p>
                            <div className="mt-1 w-full flex flex-col sm:flex-row">
                                <input
                                    className="flex-1 sm:mr-1 rounded-lg py-3 px-5 bg-gray-300 text-gray-800"
                                    placeholder="vezetéknév" maxLength="255"
                                    required name="last_name" type="text" ref={register}
                                />
                                <input
                                    className="flex-1 sm:ml-1 mt-2 sm:mt-0 rounded-lg py-3 px-5 bg-gray-300 text-gray-800"
                                    placeholder="keresztnév" maxLength="255"
                                    required name="first_name" type="text" ref={register}
                                />
                            </div>
                        </div>

                        <div className="mt-4 rounded-lg overflow-hidden flex flex-col sm:flex-row">
                            <input
                                className="flex-1 py-3 px-5 bg-gray-300 text-gray-800"
                                placeholder="xyz@gmail.com" required
                                name="email" type="email" ref={register}
                            />
                            <button
                                className="py-3 px-5 bg-purple-400 hover:opacity-75 text-purple-900 uppercase text-sm tracking-wider font-bold"
                                type="submit">Jelentkezek</button>
                        </div>
                    </div>
                }
            </div>}
        </Form>
    </div>
}
