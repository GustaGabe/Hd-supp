"use client"
import { useState } from 'react';
import {Trash2} from "lucide-react";
import {PencilLine } from "lucide-react";
import {FolderPlus} from "lucide-react";
import { FolderKanban } from 'lucide-react';

{/*neutral-950 slate-50 black blue-800*/}

const Equipamento = () => {

	{/*Abrir Adicionar*/}
	const [isOpenAdd, setIsOpenAdd] = useState(false);

	const openModalAdd = () => {
		setIsOpenAdd(true);
	};

	const closeModalAdd = () => {
		setIsOpenAdd(false);
	};

	{/*Abrir Edit*/}
	const [isOpenEdit, setIsOpenEdit] = useState(false);

	const openModalEdit = () => {
		setIsOpenEdit(true);
	};

	const closeModalEdit = () => {
		setIsOpenEdit(false);
	};

	{/*Abrir detalhes*/}
	const [isOpenDetail, setIsOpenDetail] = useState(false);

	const openModalDetail = () => {
		setIsOpenDetail(true);
	};

	const closeModalDetail = () => {
		setIsOpenDetail(false);
	};
	{/*Abrir Comfirmar Excluir*/}
	const [isOpenComfirmDel, setIsOpenComfirmDel] = useState(false);

	const openModalComfirmDel = () => {
		setIsOpenComfirmDel(true);
	};

	const closeModalComfirmDel = () => {
		setIsOpenComfirmDel(false);
	};

	return(
		<div className="flex items-center justify-center bg-black w-full h-full">
			<div className="w-[1300px] h-[500px] bg-neutral-950 border-2 border-slate-50 rounded-[5px]">
				<div className="w-full flex items-center  justify-between p-[20px] px-[40px] bg-neutral-950 rounded-t-md mb-[10px]">
					<div>
						<h1 className="text-[24px]">Gerenciar <b>Equipamentos</b></h1>
					</div>
					<div className="space-x-2 flex items-center">
						{/*<button className="bg-[#dc3545] px-[10px] py-[8px] rounded-[5px] text-[14px] flex"> <Trash2 className="mr-[5px]"/> Excluir</button>*/}
						<button className="bg-gradient-to-r from-blue-800 to-cyan-500 px-[10px] py-[8px] rounded-[5px] text-[14px] flex" onClick={openModalAdd}> <FolderPlus className="mr-[5px]"/> Adicionar novo Equipamento</button>
					</div>
				</div>
				<table className="text-slate-100 bg-neutral-900 w-full">
					<thead className="h-[45px]">
						<tr className="text-blue-500">
							<th className="w-[20%]" scope="col">Nome</th>
							<th className="w-[20%]" scope="col">Email</th>
							<th className="w-[20%]" scope="col">Endereços</th>
							<th className="w-[20%]" scope="col">Telefone</th>
							<th className="w-[20%]" scope="col">Ações</th>
						</tr>
					</thead>
					{/*linha dados do crud*/}
					<tbody className="">
						<tr className="h-[50px] border-y ">
							<td className=" text-center">Walter</td>
							<td className=" text-center">walter[potma@gmail.com]</td>
							<td className=" text-center">Rua pontal do sul, 222</td>
							<td className=" text-center">(41) 99861-9825</td>
							<td className="flex justify-center mt-[10px]">
								<button onClick={openModalComfirmDel}><Trash2 className="text-blue-700"/></button>
								<button onClick={openModalDetail}><FolderKanban className="text-sky-600 ml-[8px]"/></button>
								<button onClick={openModalEdit}><PencilLine className="text-cyan-500 ml-[8px] "/></button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div>
				{isOpenAdd && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
						<div className="bg-neutral-800 p-4 pt-6 px-6 rounded-lg w-[400px] ">
							<div className='flex justify-between'> 
								<h1 className='text-white text-[20px]'>Cadastro de Equipamento</h1>
								<button onClick={closeModalAdd} className=" bg-red-500 hover:bg-red-600 text-white py-0 px-3 rounded-lg float-right">x</button>
							</div>
							<form >
								<div className="mb-4 mt-6">
								<input type="text" id="nome" name="nome" className="form-input mt-1 block w-full bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Nome'/>
								</div>
								<div className="mb-4">
								<input type="email" id="email" name="email" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Email'/>
								</div>
								<div className="mb-4">
								<input type="password" id="senha" name="senha" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite sua Senha'/>
								</div>
								<div className="mb-4">
								<input type="text" id="telefone" name="telefone" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Telefone'/>
								</div>
								<div className="mb-4">
								<input type="text" id="cargo" name="cargo" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Cargo'/>
								</div>
								<div className='flex justify-center'>
									<button type="submit" className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white py-2 px-4 rounded-lg w-full mt-2">Enviar</button>
								</div>
							</form>
						</div>
					</div>
				)}
    		</div>
			<div>
				{isOpenEdit && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-neutral-800 p-4 pt-6 px-6 rounded-lg w-[400px] ">
							<div className='flex justify-between'> 
								<h1 className='text-white text-[20px]'>Editar Equipamento</h1>
								<button onClick={closeModalEdit} className=" bg-red-500 hover:bg-red-600 text-white py-0 px-3 rounded-lg float-right">x</button>
							</div>
							<form >
								<div className="mb-4 mt-6">
								<input type="text" id="nome" name="nome" className="form-input mt-1 block w-full bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Nome'/>
								</div>
								<div className="mb-4">
								<input type="email" id="email" name="email" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Email'/>
								</div>
								<div className="mb-4">
								<input type="password" id="senha" name="senha" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite sua Senha'/>
								</div>
								<div className="mb-4">
								<input type="text" id="telefone" name="telefone" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Telefone'/>
								</div>
								<div className="mb-4">
								<input type="text" id="cargo" name="cargo" className="form-input mt-1 block w-full  bg-neutral-700 p-1  h-11 rounded-[8px] focus:outline-none focus:border-transparent text-gray-800 px-4" placeholder='Digite seu Cargo'/>
								</div>
								<div className='flex justify-center'>
									<button type="submit" className="bg-gradient-to-r from-blue-800 to-cyan-500 text-white py-2 px-4 rounded-lg w-full mt-2">Enviar</button>
								</div>
							</form>
						</div>
					</div>
				)}
    		</div>
			<div>
				{isOpenDetail && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
						<div className=" p-4 px-6 rounded-lg w-[600px] bg-neutral-800 ">
							<div className='flex justify-between mb-5 items-center'>
								<h1 className='text-white text-[21px]'>Detalhes Equipamento</h1>
								<button onClick={closeModalDetail} className="mt-2 bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg float-right">x</button>
							</div>
							<div className=" flex flex-col text-gray-300">
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
								<p className='mb-2 border-b pb-4'>loremgaubrgarbglviua fiuwe fwuiefgwbei fu wbeiuf uwebiuw wie we</p>
							</div>
						</div>
					</div>
				)}
    		</div>
			<div>
				{isOpenComfirmDel && (
					<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-neutral-800 p-8 rounded-lg">
						<h2 className="text-lg font-semibold mb-4 text-white">Tem Certeza que deseja Excluir o Equipamento?</h2>
						<div className='flex justify-center px-[20px]'>
							<button onClick={closeModalComfirmDel} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded-lg">Cancelar</button>
							<button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-3 px-5 rounded-lg ml-6">Comfirmar</button>
						</div>
					</div>
					</div>
				)}
    		</div>
		</div>
	);
};


export default Equipamento;