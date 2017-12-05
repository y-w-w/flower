package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import util.StringUtils;


import dao.CarDao;
import entity.ShoppingCar;



public class ShoppingCarServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private CarDao dao=new CarDao();
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.service(req, resp);
		req.setCharacterEncoding("UTF-8");
		resp.setContentType("text/json;charset=UTF-8");
	    
	   
		String cmd=req.getParameter("cmd");
		System.out.println(cmd+"88888888888");
		if(cmd.equals("del")){
			delete(req,resp);
		}else if(cmd.equals("add")){
			System.out.println("-------11111-------");
			add(req,resp);
		}else if(cmd.equals("update")){
			updatenum(req, resp);
		}else if(cmd.equals("delAll")){
			System.out.println("-------delall---");
			delAll(req, resp);
		}else if(cmd.equals("setcar")){
			setcar(req, resp);
		}else{
			System.out.println("---------------12121212");
			list(req, resp);
		}
		
		
		
		
		
		
		
			
	}
	//刷新列表
	protected void list(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.service(req, resp);
		 String userIdstr = req.getParameter("userId");
		 if(!StringUtils.hasLength(userIdstr)){
			 System.out.println("没有登陆");
				req.getRequestDispatcher("/member/shopNologin.jsp").forward(req, resp);	
				return;
		 }
		System.out.println(userIdstr);
		ArrayList<ShoppingCar> carlist = dao.queryshopInf(userIdstr);
		System.out.println("-------");
		System.out.println(carlist);
		System.out.println("-------");
		if(carlist.size()==0){
			System.out.println("hhhhhhh");
			req.getRequestDispatcher("/member/shopNothing.jsp").forward(req, resp);	
			return;
		}
		double totaljsp=0;
		for (ShoppingCar car : carlist){
			totaljsp += car.getTotalprice();
		}
		PrintWriter out = resp.getWriter();
		out.print(totaljsp);
		String log = req.getParameter("log");
		System.out.println(log);
		if("1".equals(log)){
			System.out.println("1111111111111");
			double total = 0.0;

			req.setAttribute("total", total);
			req.setAttribute("carlist", carlist);
			req.getRequestDispatcher("/member/shoppingCar.jsp").forward(req, resp);	
			
			
		}	
		
	}
	//插入数据
	protected void add(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.service(req, resp);
		String userIdstr = req.getParameter("userId");
		String commodityIdstr=req.getParameter("commodityId");
		String commoditynumstr=req.getParameter("commoditynum");
		//查询购物车是否有此商品
		boolean flag = dao.checkshopingcarId(userIdstr, commodityIdstr);
		System.out.println(flag);
		if(flag){
			//没有，执行添加
			dao.addshoppingCar(userIdstr, commodityIdstr, commoditynumstr);	
		}else{
			//有，执行更改
			commoditynumstr= String.valueOf(Integer.valueOf(commoditynumstr)+dao.num);
			dao.updateshopingCar(commoditynumstr, userIdstr, commodityIdstr);
		}
		System.out.println(req.getContextPath());
		resp.sendRedirect("ShoppingCarServlet?cmd=list&log=1&userId="+userIdstr);
	}
	//删除
	protected void delete(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.service(req, resp);
		String userIdstr = req.getParameter("userId");
		String commodityIdstr=req.getParameter("commodityId");
		System.out.println("删除单行");
		ShoppingCar car = dao.querysimpleshopInf(userIdstr, commodityIdstr);
		double total =car.getTotalprice();
		boolean flag = dao.deteleshopingCar(userIdstr, commodityIdstr);
//		if(flag){
//			resp.sendRedirect("ShoppingCarServlet?cmd=list&userId="+userIdstr);
//		}	
		
		if(flag){
			
			
			
			
//			ArrayList<ShoppingCar> carlist = dao.queryshopInf(userIdstr);
//			double total = 0.0;
//			for (ShoppingCar car : carlist){
//				total += car.getTotalprice();
//			}
			
			PrintWriter out = resp.getWriter();
			out.print(total);
		}
		
		
	}
	//清空购物车
	protected void delAll(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.service(req, resp);
		
		String userIdstr = req.getParameter("userId");
		System.out.println(userIdstr+"888888");
		boolean flag = dao.detAllshoppingCar(userIdstr);
		System.out.println(flag);
		if(flag){
			
			double total = 0.0;
			
			PrintWriter out = resp.getWriter();
			out.print(total);
		}
	}
	
	
	
	
	
	
	protected void updatenum(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		//super.service(req, resp);
		String userIdstr = req.getParameter("userId");
		String commodityIdstr=req.getParameter("commodityId");
		String commoditynumstr=req.getParameter("commoditynum");
		ShoppingCar car = dao.querysimpleshopInf(userIdstr, commodityIdstr);
		Integer oldscn = car.getSCN();
		Integer newscn = Integer.valueOf(commoditynumstr);
		boolean flag = dao.updateshopingCar(commoditynumstr, userIdstr, commodityIdstr);
		if(flag){
			Double  total= car.getCPP()*(newscn-oldscn);
//			ArrayList<ShoppingCar> carlist = dao.queryshopInf(userIdstr);
//			double total = 0.0;
//			for (ShoppingCar car : carlist){
//				total += car.getTotalprice();
//			}
			PrintWriter out = resp.getWriter();
			out.print(total);
			
			
		}	
	}
	protected void setcar(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		String userIdstr = req.getParameter("userId");
		String commodityIdstr=req.getParameter("commodityId");
		ShoppingCar car = dao.querysimpleshopInf(userIdstr, commodityIdstr);
		double m =car.getTotalprice();
		PrintWriter out = resp.getWriter();
		out.print(m);
		
	}
}
