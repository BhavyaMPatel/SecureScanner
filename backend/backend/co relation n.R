datasets::attitude
data=attitude
 
corr=cor(data$complaints,data$rating)
corr

cor.test(data$rating,data$complaints)

plot(data$rating,data$complaints,type = "p")
#regression model of rating with complaints
reg=lm(data$rating~data$complaints)
reg
abline(reg)

reg1=lm(data$complaints~data$rating)
reg1
abline(reg1)


weight=c(15,26,27,2,25.5,27,32,18,22,20,26,24)
weight
## [1] 15.0 26.0 27.0 2.0 25.5 27.0 32.0 18.0 22.0 20.0 26.0 24.0
bmi=c(13.35,16.1,16.74,16,13.59,15.73,15.65,13.85,16.07,12.8,13.65,14.42)
bmi

cor1=cor(weight,bmi)
cor1

regmodel=lm(bmi~weight)
regmodel

summary.lm(regmodel)

abline(regmodel)




#normal
x=seq(-4,4,length=200)
y=dnorm(x,0,1)
plot(x,y,type="l",xlab = "Value of x",ylab = "density",main = "normal distribution",col="blue")

x1=seq(-4,0,length=200)
y1=dnorm(x1,0,1)
polygon(c(-4,x1,0),c(0,y1,0),col ="blue")



x2=seq(2,4,length=200)
y2=dnorm(x2,0,1)
polygon(c(2,x2,4),c(0,y2,0),col="yellow")

#poission lamda=np

#dpois(x=5,7)
#x=0:5
sum(dpois(0:5,7))

x=1-ppois(16,12)
x
w=0:10
round(dpois(w,3),3)

#exponential

dexp(8,(1/6))
q=data.frame(round(dpois(w,2),3),round(ppois(w,2),3))
q

plot(w,dpois(w,3),type="h")
points(w,dpois(w,3),pch=16,cex=2)
dexp(8,1/5)
plot(0:101,dexp(0:101,1/6),type="h")
dbinom(2:4,4,1/2)
pbinom(2,4,1/2)
px=dbinom(0:4,4,1/2)
ex1=weighted.mean((0:4)*(0:4),px)
ex1


#regmodel
#regmodel=lm(y~x1+x2)
#library(scatterplot3d)
#graph=scatterplot3d(X,Y,Z)
# Visualize the plane
#graph$plane3d(RegModel)

line1 <- c(1,2,3,4,5,10)
line2 <- c(2,5,7,8,9,10)

plot(line1, type = "l", col = "blue")
lines(line2, type="l", col = "red")
mylabel <- c("Apples", "Bananas", "Cherries", "Dates")
# Create a vector of colors
colors <- c("blue", "yellow", "green", "black")
# Display the pie chart with colors
pie(x, label = mylabel, main = "Pie Chart", col = colors)
# Display the explanation box
legend("bottomright", mylabel, fill = colors)

