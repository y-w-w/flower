package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import util.MD5;
import dao.CarDao;
import dao.ManagerDao;
import dao.MemberDao;
import entity.Manager;
import entity.Member;

public class MemberLoginServlet extends HttpServlet {
	private String myname="";
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

		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		HttpSession session=request.getSession(true);
		 
		//得到用户输入的验证码
	    String rand = request.getParameter("txtValidate_Code");
	    //得到系统给当前会话设定的验证码
	    String preRand = (String)session.getAttribute("Validate");
	    //验证输入的验证码是否正确
	    //为方便调试先注释掉
	    if(!rand.toLowerCase().equals(preRand)) {//如果不正确
	    	out.println("<script>alert('验证码输入出错！');history.go(-1);</script>");
	    	return;
	    }
	    //得到用户输入的账号和密码
		String memberName = request.getParameter("txtEmail");
		String memberPwd = request.getParameter("txtPassWord");
		memberPwd  = new MD5().getMD5(memberPwd .getBytes());
		
		
		MemberDao memberDao= new MemberDao();
		Member member = memberDao.login(memberName,memberPwd);
		
		
		
		if(member==null){
			//为空登录失败
			out.println("<script>alert('账号密码不正确！');history.go(-1);</script>");
	    	return;
		}
		else{	
			if(("已禁用").equals(member.getMemberStatus())){
				out.println("<script>alert('账号已被管理员禁用！');history.go(-1);</script>");
		    	return;
			}
			//登录成功后，保存登陆用户对象到session中
			//int memberId = member.getMemberId();
			session.setAttribute("loginMember",member);
//			CarDao cardao = new CarDao();
//			Integer carnum = cardao.querycarnum(String.valueOf(memberId));
//			session.setAttribute("carnum",carnum);
			
		}
		//定义一个from来接受转到该页面的页面
		String from = request.getParameter("from");
		//如果from为空则跳到首页，否则转到from页面
		if(from==null || "".equals(from)){
			request.getRequestDispatcher("IndexPage").forward(request, response);
		}else{
			out.println("<script>location='"+from+"';</script>");
			//request.getRequestDispatcher(from).forward(request, response);
		}
		
	}
		
		
	
}
