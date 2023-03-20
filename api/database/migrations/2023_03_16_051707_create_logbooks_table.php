<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logbooks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->longText('description');
            $table->timestamp("date");
            $table->integer('org_id')->unsigned();
            $table->timestamps();
           

        });
        Schema::table('logbooks', function(Blueprint $table)
{
            $table->foreign('org_id')
            ->references('id')->on('organizations')
            ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logbooks');
    }
};
