package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import util.FlowerUtil;
import entity.Member;
import entity.Orders;
import entity.ShoppingCar;
import entity.ShoppingItem;

public class MemberSend_infoServlet extends HttpServlet {

	/**
	 * The doGet method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doPost(request,response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 *
	 * This method is called when a form has its tag value method equals to post.
	 * 
	 * @param request the request send by the client to the server
	 * @param response the response send by the server to the client
	 * @throws ServletException if an error occurred
	 * @throws IOException if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		request.setCharacterEncoding("utf-8");
		
		String ordersName=request.getParameter("realname");//订购人的姓名
		String ordersPhone=request.getParameter("tel");//订购人电话
		String ordersAdress=request.getParameter("address");//订购人地址
		String ordersToName=request.getParameter("to_name");//收货人的姓名
		String ordersToTel=request.getParameter("to_tel");//收货人电话
		String ordersToAdress=request.getParameter("to_address" );//收货人地址
		String sendPrice = request.getParameter("ways");//配送方式、价格
		String sendyy = request.getParameter("yy");//送货时间，年
		String sendmm = request.getParameter("mm");//送货时间，月
		String senddd = request.getParameter("dd");//送货时间，日
		String sendHour = request.getParameter("send_timezone");//送货时间，时段
		String quest = request.getParameter("quest");//特殊要求
		String words = request.getParameter("words");//礼物留言
		String signName = request.getParameter("signname");//署名
		String signWay = request.getParameter("sign1");
		String pays = request.getParameter("pays");//支付方式
		String payAddr = request.getParameter("address");//付款地址
		
		Orders orders = new Orders();
		orders.setOrdersName(ordersName);
		orders.setOrdersPhone(ordersPhone);
		orders.setOrdersAdress(ordersAdress);
		orders.setOrders_To_name(ordersToName);
		orders.setOrders_To_tel(ordersToTel);
		orders.setOrders_To_adress(ordersToAdress);
		orders.setOrdersExpense(Double.parseDouble(sendPrice));
		if(sendPrice.equals("0")){
			orders.setOrders_Dis_server("市区送货(免费送货)");
		}else if(sendPrice.equals("30")){
			orders.setOrders_Dis_server("郊区送货(配送费30元)");
		}else if(sendPrice.equals("50")){
			orders.setOrders_Dis_server("远郊送货(配送费50元)");
		}
		orders.setOrdersMessage(words);
		if(payAddr.equals("")){
			orders.setOrders_Ppay_type(pays);
		}else{
			orders.setOrders_Ppay_type(pays+"("+payAddr+")");
		}
//		if(signWay.equals("or")){
//			orders.setSignName(words);
//		}else{
			orders.setSignName(signName);
//		}
		
		orders.setMemberQuest(quest);
		HttpSession session = request.getSession();
		orders.setMemberId(((Member)session.getAttribute("loginMember")).getMemberId());
		orders.setOrders_Del_datetime(sendyy+"-"+sendmm+"-"+senddd+" "+sendHour);
		
//		HashMap<Integer, ShoppingItem> shopcart =  (HashMap<Integer, ShoppingItem>) session.getAttribute(FlowerUtil.SESSION_SHOPPING);
//		
//		ArrayList<ShoppingItem> shopList = new ArrayList<ShoppingItem>();
//		for (int i : shopcart.keySet()) {
//			shopList.add(shopcart.get(i));
//		}
		ArrayList<ShoppingCar> carlist =(ArrayList<ShoppingCar>) session.getAttribute("carlist");
		
		
		//查询订单总额
		double total=0;
//		for (ShoppingItem i : shopcart.values()) {
//			total += (i.getPresentPrice() * i.getNum());
//		}
		for (ShoppingCar i : carlist) {
			//i.setTotalprice(i.getTotalprice());
			total += i.getTotalprice();
		}
		
		
		orders.setOrderssTotal(total+Integer.parseInt(sendPrice));
		
		request.setAttribute("total", total);
		request.setAttribute("carlist", carlist);
		request.setAttribute("orders", orders);
		
		request.getRequestDispatcher("Order_Save.jsp").forward(request, response);
		//定义一个from来接受转到该页面的页面
		String from = request.getParameter("from");
		//如果from为空则跳到首页，否则转到from页面
		if(from==null || "".equals(from)){
			out.println("<script>alert('错误页面');</script>");
		}else{
			out.println("<script>location='"+from+"';</script>");
			//request.getRequestDispatcher(from).forward(request, response);
		}
		out.flush();
		out.close();
	}

}
