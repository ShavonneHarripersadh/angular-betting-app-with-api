using Microsoft.EntityFrameworkCore.Migrations;

namespace SportApi.Migrations
{
    public partial class UpdateUserBets : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "PotentialPayout",
                table: "UserBet",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<bool>(
                name: "Result",
                table: "UserBet",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<decimal>(
                name: "Stake",
                table: "UserBet",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PotentialPayout",
                table: "UserBet");

            migrationBuilder.DropColumn(
                name: "Result",
                table: "UserBet");

            migrationBuilder.DropColumn(
                name: "Stake",
                table: "UserBet");
        }
    }
}
