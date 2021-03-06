USE [StarLabs_Shavonne]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 2018/11/23 14:42:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BetType]    Script Date: 2018/11/23 14:42:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BetType](
	[BetTypeID] [int] IDENTITY(1,1) NOT NULL,
	[Description] [nvarchar](20) NULL,
	[PriceOne] [decimal](18, 2) NOT NULL,
	[PriceTwo] [decimal](18, 2) NOT NULL,
	[Draw] [decimal](18, 2) NOT NULL,
	[MarketID] [int] NOT NULL,
 CONSTRAINT [PK_BetType] PRIMARY KEY CLUSTERED 
(
	[BetTypeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Country]    Script Date: 2018/11/23 14:42:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Country](
	[CountryID] [int] IDENTITY(1,1) NOT NULL,
	[CountryName] [nvarchar](20) NOT NULL,
	[SportID] [int] NOT NULL,
 CONSTRAINT [PK_Country] PRIMARY KEY CLUSTERED 
(
	[CountryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Event]    Script Date: 2018/11/23 14:42:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Event](
	[EventID] [int] IDENTITY(1,1) NOT NULL,
	[EventName] [nvarchar](20) NOT NULL,
	[Date] [datetime2](7) NOT NULL,
	[TournamentID] [int] NOT NULL,
 CONSTRAINT [PK_Event] PRIMARY KEY CLUSTERED 
(
	[EventID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Market]    Script Date: 2018/11/23 14:42:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Market](
	[MarketID] [int] IDENTITY(1,1) NOT NULL,
	[MarketName] [nvarchar](20) NOT NULL,
	[EventID] [int] NOT NULL,
 CONSTRAINT [PK_Market] PRIMARY KEY CLUSTERED 
(
	[MarketID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Sport]    Script Date: 2018/11/23 14:42:14 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Sport](
	[SportID] [int] IDENTITY(1,1) NOT NULL,
	[SportName] [nvarchar](20) NOT NULL,
 CONSTRAINT [PK_Sport] PRIMARY KEY CLUSTERED 
(
	[SportID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tournament]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tournament](
	[TournamentID] [int] IDENTITY(1,1) NOT NULL,
	[TournamentName] [nvarchar](20) NOT NULL,
	[CountryID] [int] NOT NULL,
 CONSTRAINT [PK_Tournament] PRIMARY KEY CLUSTERED 
(
	[TournamentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserBet]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserBet](
	[BetID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[BetTypeID] [int] NOT NULL,
	[PotentialPayout] [decimal](18, 2) NOT NULL,
	[Result] [bit] NOT NULL,
	[Stake] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_UserBet] PRIMARY KEY CLUSTERED 
(
	[BetID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserDetails]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserDetails](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](20) NOT NULL,
	[Password] [nvarchar](20) NOT NULL,
	[Balance] [decimal](18, 2) NOT NULL,
 CONSTRAINT [PK_UserDetails] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserBet] ADD  DEFAULT ((0.0)) FOR [PotentialPayout]
GO
ALTER TABLE [dbo].[UserBet] ADD  DEFAULT ((0)) FOR [Result]
GO
ALTER TABLE [dbo].[UserBet] ADD  DEFAULT ((0.0)) FOR [Stake]
GO
ALTER TABLE [dbo].[UserDetails] ADD  DEFAULT ((0.0)) FOR [Balance]
GO
/****** Object:  StoredProcedure [dbo].[AddBet]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddBet]
@PunterID int, @MarketID int, @Odds decimal(18,2), @Stake decimal(18,2),@Payout decimal(18,2)
as
INSERT INTO Bet(PunterID,MarketID,Odds,Stake,PotentialPayout) Values(@PunterID,@MarketID,@Odds,@Stake, @Payout)
GO
/****** Object:  StoredProcedure [dbo].[AddBetType]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddBetType]
@Name nvarchar(20),@PriceOne decimal(18,0), @PriceTwo decimal(18,0), @Draw decimal(18,0) , @ID int

as begin
INSERT INTO BetType(Description, PriceOne,PriceTwo,Draw,MarketID) VALUES(@Name,@PriceOne,@PriceTwo,@Draw,@ID )

declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM BetType WHERE BetTypeID=@IDa
end
GO
/****** Object:  StoredProcedure [dbo].[AddCountry]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddCountry]
@Name nvarchar(20), @ID int

as begin
INSERT INTO Country(CountryName, SportID) VALUES(@Name,@ID )

declare @Ida int 
set @Ida = SCOPE_IDENTITY()

SELECT * FROM Country WHERE CountryID=@Ida
end
GO
/****** Object:  StoredProcedure [dbo].[AddEvent]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddEvent]
@Name nvarchar(20), @ID int

as begin
INSERT INTO Event(EventName, TournamentID, Date) VALUES(@Name,@ID, GETDATE() )

declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM Event WHERE EventID=@IDa
end
GO
/****** Object:  StoredProcedure [dbo].[AddMarket]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddMarket]
@Name nvarchar(20), @ID int

as begin
INSERT INTO Market(MarketName, EventID) VALUES(@Name,@ID )

declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM Market WHERE MarketID=@IDa
end
GO
/****** Object:  StoredProcedure [dbo].[AddSport]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddSport]
@Name nvarchar(20)

as
begin
INSERT INTO Sport VALUES(@Name)

declare @ID int 
set @ID = SCOPE_IDENTITY()

SELECT * FROM Sport WHERE SportID=@ID
end
GO
/****** Object:  StoredProcedure [dbo].[AddTournament]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddTournament]
@Name nvarchar(20), @ID int

as begin
INSERT INTO Tournament (TournamentName, Tournament.CountryID) VALUES(@Name,@ID ) 
declare @IDa int 
set @IDa = SCOPE_IDENTITY()

SELECT * FROM Tournament WHERE TournamentID=@IDa
end


GO
/****** Object:  StoredProcedure [dbo].[AddUserBalance]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddUserBalance]
@ID int, @Balance decimal(18,0)

as begin
UPDATE UserDetails set Balance+=@Balance WHERE UserID =@ID

declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM UserDetails WHERE UserID=@IDa
end
GO
/****** Object:  StoredProcedure [dbo].[AddUserBet]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddUserBet]
@UserID int, @MarketID int, @Stake decimal, @Payout decimal, @Result bit
as begin 
INSERT INTO UserBet(UserID,BetTypeID, PotentialPayout, Result, Stake) Values(@UserID,@MarketID, @Payout,@Result,@Stake)

declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM UserBet WHERE BetID=@IDa
end
GO
/****** Object:  StoredProcedure [dbo].[AddUserDetails]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[AddUserDetails]
@Name nvarchar(20), @Pass nvarchar(20)

as begin
INSERT INTO UserDetails(Username, Password, Balance) VALUES(@Name,@Pass,100 )

declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM UserDetails WHERE UserID=@IDa
end
GO
/****** Object:  StoredProcedure [dbo].[DeleteBetType]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteBetType]
@ID int

AS BEGIN
	DELETE FROM BetType WHERE BetTypeID = @ID
	SELECT * FROM BetType
	END
GO
/****** Object:  StoredProcedure [dbo].[DeleteCountry]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteCountry]
@ID int

AS BEGIN
	DELETE FROM Country WHERE CountryID = @ID
	DELETE FROM Tournament WHERE CountryID =@ID

	SELECT * FROM Country
	END
GO
/****** Object:  StoredProcedure [dbo].[DeleteEvent]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteEvent]
@ID int

AS BEGIN
	DELETE FROM Event WHERE EventID = @ID
	SELECT * FROM Event
	END
GO
/****** Object:  StoredProcedure [dbo].[DeleteMarket]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteMarket]
@ID int

AS BEGIN
	DELETE FROM Market WHERE MarketID = @ID
	SELECT * FROM Market
	END
GO
/****** Object:  StoredProcedure [dbo].[DeleteSport]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteSport]
@ID int

AS BEGIN
	DELETE FROM Sport WHERE SportID =@ID
	DELETE FROM Country WHERE SportID=@ID

	SELECT * FROM Sport
	END
GO
/****** Object:  StoredProcedure [dbo].[DeleteTournament]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[DeleteTournament]
@ID int

AS BEGIN
	DELETE FROM Tournament WHERE TournamentID = @ID
	DELETE FROM Event WHERE TournamentID=@ID

	SELECT * FROM Tournament
	END
GO
/****** Object:  StoredProcedure [dbo].[GetBetDetails]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetBetDetails]
@ID int
as
SELECT bd.BetID , bd.PunterName, bd.MarketName,bd.Odds, Bd.Stake,bd.PotentialPayout FROM BetDetails bd INNER JOIN Punter p ON bd.PunterID=p.PunterID INNER JOIN Market m ON bd.MarketID =m.MarketID
GO
/****** Object:  StoredProcedure [dbo].[ReadBetType]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadBetType]

as
SELECT * FROM BetType
GO
/****** Object:  StoredProcedure [dbo].[ReadCountry]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CReate PROCEDURE [dbo].[ReadCountry]

as
SELECT * FROM Country
GO
/****** Object:  StoredProcedure [dbo].[ReadCountryByID]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ReadCountryByID]
@ID int

as
SELECT * FROM Country WHERE CountryID =@ID
RETURN
GO
/****** Object:  StoredProcedure [dbo].[ReadEvent]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CReate PROCEDURE [dbo].[ReadEvent]

as
SELECT * FROM Event
GO
/****** Object:  StoredProcedure [dbo].[ReadEventByID]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ReadEventByID]
@ID int

as
SELECT * FROM Event WHERE EventID =@ID
RETURN
GO
/****** Object:  StoredProcedure [dbo].[ReadMarket]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadMarket]

as
SELECT * FROM Market
GO
/****** Object:  StoredProcedure [dbo].[ReadSport]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CReate PROCEDURE [dbo].[ReadSport]

as
SELECT * FROM Sport
GO
/****** Object:  StoredProcedure [dbo].[ReadSportByID]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ReadSportByID]
@ID int

as
SELECT * FROM Sport WHERE SportID =@ID
RETURN
GO
/****** Object:  StoredProcedure [dbo].[ReadTournament]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CReate PROCEDURE [dbo].[ReadTournament]

as
SELECT * FROM Tournament
GO
/****** Object:  StoredProcedure [dbo].[ReadTournamentByID]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ReadTournamentByID]
@ID int

as
SELECT * FROM Tournament WHERE TournamentID =@ID
RETURN
GO
/****** Object:  StoredProcedure [dbo].[ReadUserBet]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ReadUserBet]

as
SELECT * FROM UserBet
GO
/****** Object:  StoredProcedure [dbo].[ReadUserDetails]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[ReadUserDetails]

as
SELECT * FROM UserDetails
GO
/****** Object:  StoredProcedure [dbo].[ReadUserDetailsByLogin]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[ReadUserDetailsByLogin]
@username nvarchar(20), @password nvarchar(20)
as
SELECT * FROM UserDetails WHERE Username = @username AND Password = @password
GO
/****** Object:  StoredProcedure [dbo].[UpdateBetType]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateBetType]
@ID int, @PriceOne decimal(18,0), @PriceTwo decimal(18,0), @Draw decimal(18,0)

as begin
UPDATE BetType SET PriceOne =@PriceOne, PriceTwo =@PriceTwo, Draw=@Draw WHERE BetTypeID = @ID 
declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM BetType WHERE BetTypeID=@IDa

end
GO
/****** Object:  StoredProcedure [dbo].[UpdateCountry]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateCountry]
@ID int, @Name nvarchar(20)

as begin
UPDATE Country SET CountryName =@Name WHERE CountryID = @ID

declare @Ida int 
set @Ida = SCOPE_IDENTITY()

SELECT * FROM Country WHERE CountryID=@Ida
end
GO
/****** Object:  StoredProcedure [dbo].[UpdateEvent]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateEvent]
@ID int, @Name nvarchar(20)

as begin
UPDATE Event SET EventName =@Name WHERE EventID = @ID 
declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM Event WHERE EventID=@IDa

end
GO
/****** Object:  StoredProcedure [dbo].[UpdateMarket]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateMarket]
@ID int, @Name nvarchar(20)

as begin
UPDATE Market SET MarketName =@Name WHERE MarketID = @ID 
declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM Market WHERE MarketID=@IDa

end
GO
/****** Object:  StoredProcedure [dbo].[UpdateSport]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateSport]
@ID int, @Name nvarchar(20)

as
begin
UPDATE Sport SET SportName =@Name WHERE SportID = @ID

declare @Ida int 
set @Ida = SCOPE_IDENTITY()

SELECT * FROM Sport WHERE SportID=@Ida
end
GO
/****** Object:  StoredProcedure [dbo].[UpdateTournament]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[UpdateTournament]
@ID int, @Name nvarchar(20)

as begin
UPDATE Tournament SET TournamentName =@Name WHERE TournamentID = @ID
declare @Ida int 
set @Ida = SCOPE_IDENTITY()

SELECT * FROM Tournament WHERE TournamentID=@Ida
end
GO
/****** Object:  StoredProcedure [dbo].[UpdateUserBalance]    Script Date: 2018/11/23 14:42:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create PROCEDURE [dbo].[UpdateUserBalance]
@ID int, @Balance decimal(18,0)

as begin
UPDATE UserDetails set Balance=@Balance WHERE UserID =@ID

declare @IDa int
set @IDa = SCOPE_IDENTITY()

SELECT * FROM UserDetails WHERE UserID=@IDa
end
GO
