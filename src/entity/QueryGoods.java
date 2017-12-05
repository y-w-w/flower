package entity;

import java.sql.Date;



public class QueryGoods {
	private long ordersid;
	private long commodityId;
	private String commodityName;
	private String commoditydetail;
	private String url;//图片
	private double ordersdetpic;
	private String ordersOrdTime;
	
	public long getOrdersid() {
		return ordersid;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public void setOrdersid(long ordersid) {
		this.ordersid = ordersid;
	}
	public long getCommodityId() {
		return commodityId;
	}
	public void setCommodityId(long commodityId) {
		this.commodityId = commodityId;
	}
	public String getCommodityName() {
		return commodityName;
	}
	public void setCommodityName(String commodityName) {
		this.commodityName = commodityName;
	}
	public String getCommoditydetail() {
		return commoditydetail;
	}
	public void setCommoditydetail(String commoditydetail) {
		this.commoditydetail = commoditydetail;
	}
	public double getOrdersdetpic() {
		return ordersdetpic;
	}
	public void setOrdersdetpic(double ordersdetpic) {
		this.ordersdetpic = ordersdetpic;
	}
	public String getOrdersOrdTime() {
		return ordersOrdTime;
	}
	public void setOrdersOrdTime(String ordersOrdTime) {
		this.ordersOrdTime = ordersOrdTime;
	}
	public String getOrdersStatus() {
		return ordersStatus;
	}
	public void setOrdersStatus(String ordersStatus) {
		this.ordersStatus = ordersStatus;
	}
	public int getOrdersdetnum() {
		return ordersdetnum;
	}
	public void setOrdersdetnum(int ordersdetnum) {
		this.ordersdetnum = ordersdetnum;
	}
	private String ordersStatus;
	private int ordersdetnum;
	public QueryGoods() {
		super();
		// TODO Auto-generated constructor stub
	}
	public QueryGoods(long ordersid, long commodityId, String commodityName,
			String commoditydetail, String url, double ordersdetpic,
			String ordersOrdTime, String ordersStatus, int ordersdetnum) {
		super();
		this.ordersid = ordersid;
		this.commodityId = commodityId;
		this.commodityName = commodityName;
		this.commoditydetail = commoditydetail;
		this.url = url;
		this.ordersdetpic = ordersdetpic;
		this.ordersOrdTime = ordersOrdTime;
		this.ordersStatus = ordersStatus;
		this.ordersdetnum = ordersdetnum;
	}
	@Override
	public String toString() {
		return "QueryGoods [ordersid=" + ordersid + ", commodityId="
				+ commodityId + ", commodityName=" + commodityName
				+ ", commoditydetail=" + commoditydetail + ", url=" + url
				+ ", ordersdetpic=" + ordersdetpic + ", ordersOrdTime="
				+ ordersOrdTime + ", ordersStatus=" + ordersStatus
				+ ", ordersdetnum=" + ordersdetnum + "]\n";
	}
	 
	
	
	
}
